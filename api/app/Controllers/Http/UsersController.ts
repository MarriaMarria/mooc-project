import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

// export default class UsersController {
//     public async get() {
//         return [
//             {
//                 id: 1,
//                 username: "Teddy",
//                 email: "teddy@nomail.com"
//                 password: "password",
//             },
//         ]
//     }
// }

// we went to return all users so we use User.all method
// after as we've added a new function to controller, we have to expose a route in the routes.ts file
export default class UsersController {
    public async get() {
        // get all users
        return await User.all()
    }

    public async post({ request }) {
        const newUser = request.all();
        return await User.create(newUser)
    }
}