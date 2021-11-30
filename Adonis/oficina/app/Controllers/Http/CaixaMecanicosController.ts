// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CaixaMecanico from 'App/Models/CaixaMecanico'
import User from '../../Models/User'

export default class CaixaMecanicosController {
  public async index({ view, auth }) {
    const user = await User.findOrFail(auth.user.id)
    const caixas = await user.related('caixas').query()
    return view.render('caixaMecanicos/index', { caixas })
  }

  public async show({ view, params, auth, response, session }) {
    const caixa = await CaixaMecanico.find(params.id)
    if (caixa.userId != auth.user.id) {
      session.flash('message', 'This caixa was not found for this User.')
      return response.redirect('/caixa')
    }
    return view.render('caixaMecanicos/show', { caixa })
  }

  public create({ view }) {
    return view.render('caixaMecanicos/create')
  }

  public async store({ request, response, auth }) {
    const user = await User.findOrFail(auth.user.id)
    await user.related('caixas').create({
      valor: request.input('valor'),
      descricao: request.input('descricao'),
      isEntrada: request.input('isEntrada'),
      fiado: request.input('fiado'),
    })

    response.redirect('/caixa')
  }

  public async edit({ view, params }) {
    const caixa = await CaixaMecanico.find(params.id)
    return view.render('caixaMecanicos/edit', { caixa })
  }

  public async update({ request, response, params }) {
    const caixa = await CaixaMecanico.findOrFail(params.id)
    const data = request.only(['valor', 'descricao', 'isEntrada', 'fiado'])
    caixa.merge(data)
    await caixa.save()

    return response.redirect('/caixa')
  }

  public async delete({ params, response, auth, session }) {
    const caixa = await CaixaMecanico.findOrFail(params.id)
    if (caixa.userId != auth.user.id) {
      session.flash('message', 'This caixa was not found for this User.')
      return response.redirect('/caixa')
    }
    await caixa.delete()
    response.redirect('/caixa')
  }
}
