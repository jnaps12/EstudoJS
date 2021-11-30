// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Mail from '@ioc:Adonis/Addons/Mail'
import User from '../../Models/User'
import { DateTime } from 'luxon'

export default class EmailVerifiesController {
  public async index({ auth, response, session }) {
    auth.user?.sendVerificationEmail(session)
    return response.redirect().back()
  }

  public async confirm({ response, params, session }) {
    const userId = params.user_id
    const token = params.token
    const user = await User.findOrFail(userId)
    const sessionToken = session.get(`token-${userId}`)
    if (sessionToken === token) {
      user.email_verified_at = DateTime.local()
      user.save()
      session.forget(`token-${userId}`)
      return response.redirect('/caixa')
    } else {
      return 'Invalida token'
    }
    // user.email_verified_at = new
  }
}
