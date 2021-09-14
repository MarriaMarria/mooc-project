import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Steps extends BaseSchema {
  protected tableName = 'steps'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.string('body')
      table
          .integer('course_id')
          .unsigned()
          .references('courses.id')
          .onDelete('CASCADE') // delete when the course is deleted
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
