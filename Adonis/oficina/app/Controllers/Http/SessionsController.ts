// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public create({ view }) {
    return view.render('sessions/create')
  }

  public async store({ auth, request, response, view }) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      response.redirect('/caixa')
    } catch {
      return response.badRequest('Invalid')
    }
  }

  public async delete({ auth, response }) {
    await auth.use('web').logout()
    response.redirect('/login')
  }
}
