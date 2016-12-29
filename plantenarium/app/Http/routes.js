'use strict'

const Route = use('Route')

Route.get('/', 'PlantController.index').as('main')
Route.get('/plant/az', 'PlantController.sorted')
Route.get('/plant/category', 'PlantController.getCategories')
Route.get('/plant/create', 'PlantController.create')
Route.post('/plant/create', 'PlantController.doCreate')
Route.get('/:id/plantEdit', 'PlantController.edit')
Route.post('/:id/plantEdit', 'PlantController.doEdit')
Route.get('/plant/search', 'PlantController.search')
Route.post('/plant/search', 'PlantController.doSearch')
Route.get('/:id/delete', 'PlantController.doDelete')
Route.get('/plant/:id', 'PlantController.show')
Route.get('/:id/createReview', 'PlantController.createReview')
Route.post('/:id/createReview', 'PlantController.doCreateReview')



Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doRegister')
Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')
Route.get('/user/:id', 'UserController.profile')
Route.get('/:id/userEdit', 'UserController.editProfile')
Route.post('/:id/userEdit', 'UserController.doEditProfile')
Route.get('/:id/myList', 'PlantController.myPlants')

Route.get('/*', 'PlantController.index')

Route.group('ajax', function () {
  Route.delete('/:id/delete', 'PlantController.ajaxDelete')
  Route.post('/login', 'UserController.ajaxLogin')
}).prefix('/ajax')