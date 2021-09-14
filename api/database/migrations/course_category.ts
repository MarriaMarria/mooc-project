import BaseSchema from '@ioc:Adonis/Lucid/Schema'
// import Course from 'App/Models/Course';
// import courses from './1629383618224_courses'
// import Categories from './1631611508667_categories'
// import Category from 'App/Models/Category'


export default class courseCategory extends BaseSchema {
    protected tableName = 'course_category'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.integer('category_id').unsigned().references('categories.id')
            table.integer('course_id').unsigned().references('courses.id')
            table.unique(['category_id', 'course_id'])
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }
}