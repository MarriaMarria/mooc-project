// import BaseSchema from '@ioc:Adonis/Lucid/Schema'
// import User from 'App/Models/User'
// import courses from './1629383618224_courses'
// import users from './1629377660606_users'

// export default class UsersCourses extends BaseSchema {
//     protected tableName = 'users_has_course'

//     public async up() {
//         this.schema.createTable(this.tableName, (table) => {
//             table.increments('id').primary
//             table.integer('user_id').unsigned().references('users.id')
//             table.integer('course_id').unsigned().references('courses.id')
//             table.unique(['user_id', 'skill_id'])
//             table.timestamp('created_at', { useTz: true })
//             table.timestamp('updated_at', { useTz: true })
//         })
//     }
// }