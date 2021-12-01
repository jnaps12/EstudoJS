import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import I18n from '@ioc:Adonis/Addons/I18n'

export default class CaixaMecanico extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public valor: number

  @column()
  public descricao: string

  @column()
  public isEntrada: boolean

  @column()
  public fiado: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  public formatDate(date) {
    const newDate = I18n.locale('pt').formatDate(date, {
      dateStyle: 'short',
      timeStyle: 'short',
    })
    return newDate.replace(' ', ' às ')
  }
}
