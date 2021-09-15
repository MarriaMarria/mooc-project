import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from "App/Models/Course";


export default class CoursesController {
    // public async get() {
    //     return await Course.all()
    // }
    public async index({ request }: HttpContextContract) {
        const course = await Course.query();
        return course;
    }


    public async create({ auth, request }: HttpContextContract) {
        const user = await auth.use('api').authenticate()

        const course = new Course()

        course.title = request.input('title')
        course.description = request.input('description')
        course.estimated_time = request.input('estimated_time')
        course.requirements = request.input('requirements')
        course.userId = request.input('user')

        await user.related('course').save(course);
        return course

    }

    // http://127.0.0.1:51344/courses/create?description=Apprendre à développer des applications avec nodejs, plus précisément le framework adonisjs 4 qui est considéré comme un framework frontend et au même temps backend &userId=1&estimated_time=29:49&requirements=PC&title=Adonis JS : présentation d'un framework pour Node JS

    public async update({ auth, request, params }: HttpContextContract) {
        const course = await Course.find(params.id);
    

        if (course) {
            course.title = request.input("title");

            if (await course.save()) {
            
                return course;
            }
            return; // 422
        }

        return; // 401
    }

    // public async show ({}: HttpContextContract) {
    // }

    // public async edit ({}: HttpContextContract) {
    // }

    // public async update ({}: HttpContextContract) {
    // }

    // public async destroy ({}: HttpContextContract) {
    // }
}

