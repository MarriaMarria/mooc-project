import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User"

export default class AuthController {
    public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    try {
        const token = await auth.use('api').attempt(email, password, {
            expiresIn: "30 days",
        });
        return token.toJSON();
    } catch (error) {
        return error.message;
    }
    }
    public async register({ request, auth }: HttpContextContract) {
        const username = request.input('username');
        const email = request.input('email'); 
        const password = request.input('password');


    // create a new user

        const newUser = new User();
        newUser.email = email;
        newUser.password = password;
        newUser.username = username;

        await newUser.save();
        try {
            const token = await auth.use("api").login(newUser, {
                expiresIn: "30 days",
            });
            return token.toJSON();
        } catch (error) {
            return error.message;
        }
    }
}
