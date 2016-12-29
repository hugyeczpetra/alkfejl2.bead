'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')
const Hash = use('Hash')

class UserController {

    * register (request, response) {
    const isLoggedIn = yield request.auth.check()
    if (isLoggedIn) {
      response.redirect('/')
    }

    yield response.sendView('register')
  }


  * doRegister (request, response) { 
    const registerData = request.except('_csrf');

     const rules = {
      username: 'required|alpha_numeric|unique:users',
      email: 'required|email|unique:users',
      password: 'required|min:4',
      password_confirm: 'required|same:password',
    };

    const validation = yield Validator.validateAll(registerData, rules)

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }

    const user_ = new User()

    user_.firstName = registerData.firstName;
    user_.lastName = registerData.lastName;
    user_.username = registerData.username;
    user_.email = registerData.email;
    user_.password = yield Hash.make(registerData.password) 

    yield user_.save()
    response.redirect('/')
  }


  * login(request, response) {
    yield response.sendView('login')
  }

  * doLogin (request, response) {
    const username = request.input('username')
    const password = request.input('password')

    try {
      const login = yield request.auth.attempt(username, password) 
      if (login) {
        response.redirect('/')
        return
      }
    } 
    catch (err) {
      yield request
        .withAll()
        .andWith({errors: [
          {
            message: 'Hibás felhasználónév vagy jelszó!'
          }
        ]})
        .flash()

      response.redirect('/login')
    }
  }

  * ajaxLogin(request, response) {
    const username = request.input('username')
    const password = request.input('password')

    try {
      const login = yield request.auth.attempt(username, password) 
      if (login) {
        response.send({ success: true })
        return
      }
    } 
    catch (err) {
      response.send({ success: false })
    }
  }


  * doLogout (request, response) {
    yield request.auth.logout()
    response.redirect('/')
  }


  * profile(request, response) {
    //const isLoggedIn = yield request.auth.check()
    /*if (isLoggedIn) {
      response.redirect('/')
    }*/
    const id = request.param('id');
    const user_ = yield User.find(id);
    //yield user_.load();

    yield response.sendView('profile', {
      user: user_.toJSON()
    })
  }

  * editProfile (request, response) {
    const id = request.param('id');
    const user_ = yield User.find(id);
 

    yield response.sendView('userEdit', {
      user: user_.toJSON()
    });
  }

  * doEditProfile(request, response) {
    const userData = request.except('_csrf');

    const rules = {
      password: 'required|min:4',
      password_confirm: 'required|same:password',
    };

    const validation = yield Validator.validateAll(userData, rules)

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }

    const id = request.param('id');
    const user_ = yield User.find(id);

    user_.lastName = userData.lastName;
    user_.firstName = userData.firstName;
    user_.password = yield Hash.make(userData.password) 

    yield user_.save()
    
    response.redirect('/')
  }

}

module.exports = UserController