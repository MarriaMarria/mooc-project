import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Course from './Course'
import Review from './Review'

import {
  column,
  beforeSave,
  BaseModel,
  HasMany,
  hasMany,
} from '@ioc:Adonis/Lucid/Orm'
import Review from './Review'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: String

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // authentification
  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
  // one to many, one user can have many courses
  @hasMany(() => Course)
  public course: HasMany<typeof Course>;

  @hasMany(() => Review)
  public review: HasMany<typeof Review>;

}
