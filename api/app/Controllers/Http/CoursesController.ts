import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from "App/Models/Course";


export default class CoursesController {
    public async get() {
        return await Course.all()
    }

    // public async create ({ auth, request }: HttpContextContract) {
    //     const user = await auth.use('api').authenticate()

    //     const course = new Course()

    //     course.title = request.input('title')
    //     course.description = request.input('description')
    //     course.estimated_time = request.input('estimated_time')
    //     course.requiredments = request.input('requirements')

    //     await user.related('course').save(course);
    //     return course
        
    // }

    // public async store ({}: HttpContextContract) {
    // }
  
    // public async show ({}: HttpContextContract) {
    // }
  
    // public async edit ({}: HttpContextContract) {
    // }
  
    // public async update ({}: HttpContextContract) {
    // }
  
    // public async destroy ({}: HttpContextContract) {
    // }
  }

