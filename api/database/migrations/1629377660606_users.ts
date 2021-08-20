import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

// an up function will create a users table
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('username').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
