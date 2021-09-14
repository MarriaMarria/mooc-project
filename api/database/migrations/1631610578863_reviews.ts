import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reviews extends BaseSchema {
  protected tableName = 'reviews'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('note')
      table.string('review')
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamps(true)
      table
          .integer('course_id')
          .unsigned()
          .references('courses.id')
          .onDelete('CASCADE') // delete when the course is deleted
      table
          .integer('user_id')
          .unsigned()
          .references('users.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

