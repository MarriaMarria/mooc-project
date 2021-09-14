import { DateTime } from 'luxon'
import Step from "App/Models/Step"
import { 
  BaseModel, 
  column,
  manyToMany,
  ManyToMany,
  BelongsTo,
  belongsTo,
  hasMany,
  HasMany,
  ManyToMany,
  } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Review from './Review'
import Categories from 'Database/migrations/1631611508667_categories'
import Category from './Category'

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

  @hasMany(() => Review, {
    foreignKey: 'review_id'
  })
  public review: HasMany<typeof Review>; 

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @manyToMany(() => Category)
  public category: ManyToMany<typeof Category>
    
}
