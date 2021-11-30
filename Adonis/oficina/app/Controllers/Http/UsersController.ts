// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from '../../Validators/UserValidator'
import User from '../../Models/User'

export default class UsersController {
  public create({ view }) {
    return view.render('users/create')
  }

  public async store({ auth, request, response, session }) {
    const data = await request.validate(UserValidator)

    const user = await User.create({
      email: data.email,
      password: data.password,
    })

    //verification email

    await auth.use('web').login(user)
    session.flash(
      'message',
      'User created successfully, please check your email to verify account.'
    )
    user.sendVerificationEmail(session)
    return response.redirect().toRoute('/caixa')
  }
}
