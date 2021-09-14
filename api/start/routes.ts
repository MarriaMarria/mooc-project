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
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import { Response } from '@adonisjs/core/build/standalone'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : Response.badRequest(report)
})

Route.get('users', 'UsersController.get')

Route.post('register', "AuthController.register");
Route.post('login', "AuthController.login"); 

// Route.get('dashboard', async ({ auth }) => {
//   await auth.use('api').authenticate()

//   // ✅ Request authenticated
//   console.log(auth.user!)
// })


// Route.get('course', 'CoursesController.get')
// Route.post('course', 'CoursesController.post')