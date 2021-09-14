import { DateTime } from 'luxon'
import Step from "App/Models/Step"
import { 
  BaseModel, 
  column,
  // manyToMany,
  // ManyToMany,
  BelongsTo,
  belongsTo,
  hasMany,
  HasMany,
  } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String

  @column()
  public description: String

  @column()
  public estimated_time: String

  @column()
  public requirements: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Step, {
    foreignKey: 'step_id'
  })
  public step: HasMany<typeof Step>; //the model we are relating 

  // @manyToMany(() => User)
  // public users: ManyToMany<typeof User>

  // Relationships
  // many to one = belongs to
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;
}
