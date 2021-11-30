/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'CaixaMecanicosController.index')
  Route.get('/create', 'CaixaMecanicosController.create')
  Route.post('/', 'CaixaMecanicosController.store')
  Route.get('/:id', 'CaixaMecanicosController.show')
  Route.get('/:id/edit', 'CaixaMecanicosController.edit')
  Route.post('/:id', 'CaixaMecanicosController.update')
  Route.post('/:id/delete', 'CaixaMecanicosController.delete')
})
  .prefix('/caixa')
  .middleware('auth')
