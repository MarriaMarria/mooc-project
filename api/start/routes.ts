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


Route.group(() => {
  Route.post("register", "AuthController.register");
  Route.post("login", "AuthController.login");
  Route.get("users", "UsersController.get");
  Route.get("courses", "CoursesController.index");
})

Route.group(() => {
  Route.post("courses/create", "CoursesController.create");

}).middleware("auth:api");

// Route.get('dashboard', async ({ auth }) => {
//   await auth.use('api').authenticate()

//   // ✅ Request authenticated
//   console.log(auth.user!)
// })

// https://docs.adonisjs.com/guides/controllers
// Route.get('/posts', () => {
//   return 'List all posts'
// })

// Route.get('/posts/create', () => {
//   return 'Display a form to create a post'
// })

// Route.post('/posts', async () => {
//   return 'Handle post creation form request'
// })

// Route.get('/posts/:id', () => {
//   return 'Return a single post'
// })

// Route.get('/posts/:id/edit', () => {
//   return 'Display a form to edit a post'
// })

// Route.put('/posts/:id', () => {
//   return 'Handle post update form submission'
// })

// Route.delete('/posts/:id', () => {
//   return 'Delete post'
// })

