import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Mail from '@ioc:Adonis/Addons/Mail'
import { nanoid } from 'nanoid'
import Env from '@ioc:Adonis/Core/Env'
import CaixaMecanico from './CaixaMecanico'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column.dateTime()
  public email_verified_at: DateTime

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(() => CaixaMecanico, {
    foreignKey: 'userId',
  })
  public caixas: HasMany<typeof CaixaMecanico>

  public async sendVerificationEmail(session) {
    const token = nanoid()
    session.put(`token-${this.id}`, token)
    const url = `${Env.get('APP_URL')}/confirm_email/${this.id}/${token}`
    Mail.send((message) => {
      message
        .from('adonisjs@email.com')
        .to(this.email)
        .subject('Please verify your email')
        .htmlView('email/verify', { user: this, url })
    })
  }
}
