/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import './routes/caixa'

Route.on('/').render('SessionsController.create')

//rotas para criaçaõ da sessão
Route.get('/login', 'SessionsController.create').as('sessions.create')
Route.post('/login', 'SessionsController.store').as('sessions.store')
Route.get('/logout', 'SessionsController.delete').as('sessions.delete')
Route.post('/send_email', 'EmailVerifiesController.index').middleware('auth')
Route.get('/confirm_email/:user_id/:token', 'EmailVerifiesController.confirm').middleware('auth')



//Criação de users
Route.group(() => {
  Route.get('/create', 'UsersController.create').as('create')
  Route.post('/store', 'UsersController.store').as('store')
})
  .prefix('/users')
  .as('users')
