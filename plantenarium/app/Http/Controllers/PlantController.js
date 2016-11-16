'use strict'

const Database = use('Database')
const Plant = use('App/Model/Plant')
const Category = use('App/Model/Category')
const Review = use('App/Model/Review')
const User = use('App/Model/User')



class PlantController {

  * index (request, response) {
    const plants_ = yield Plant.query().orderBy('id', 'desc').limit(5).fetch();
    yield response.sendView('main', {
      plants:plants_.toJSON()
    });
  }


  * getCategories(request, response) {
    const categories_ = yield Category.all()    
    for(let category of categories_) { 
      const id = category.id;    
      //const plants = yield Database.from('plants').select('plantName').where({plantCategory: ID});
      const plants = yield Plant.query().where('plantCategory', id).orderBy('categoryName', 'asc').fetch();
      category.topPlants = plants.toJSON();
    }
    
    yield response.sendView('categoryView', {
      categories: categories_.toJSON(),
    })  
  }


  * sorted (request, response) {
    const plants_ = yield Plant.query().orderBy('plantName', 'asc').fetch()
    yield response.sendView('azView', {
      plants:plants_.toJSON()
    });
  }


  * create (request, response) {
    const categories = yield Category.all()

    const isLoggedIn = yield request.auth.check()
    if (!isLoggedIn) {
      yield response.sendView('error', {})
      return
    }

    yield response.sendView('newPlantCreate', {
      categories: categories.toJSON()
    });
  }


  * doCreate (request, response) {
    const plantData = request.except('_csrf');

    plantData.user_id = request.currentUser.id;
    if( plantData.plantPicture == "" ) 
    {
        plantData.plantPicture = "nincs.jpg"
    }

    const plant = yield Plant.create(plantData)
    response.redirect('/')
  }


  * edit (request, response) {
    const categories = yield Category.all()
    const id = request.param('id');
    const plant_ = yield Plant.find(id);

    const isLoggedIn = yield request.auth.check()
    if (!isLoggedIn) {
      yield response.sendView('error', {})
    }
    else if (request.currentUser.id !== plant_.user_id) {
      yield response.sendView('error', {})
    }

    yield response.sendView('plantEdit', {
      categories: categories.toJSON(),
      plant: plant_.toJSON()
    });
  }


  * doEdit (request, response) {
    const plantData = request.except('_csrf');

    const id = request.param('id');
    const plant_ = yield Plant.find(id);

    plant_.plantName = plantData.plantName;
    plant_.plantNeed = plantData.plantNeed; 
    plant_.plantCategory = plantData.plantCategory;
    if(plantData.plantPicture == "") 
    {
        plant_.plantPicture = "nincs.jpg"
    }
    else {
      plant_.plantPicture = plantData.plantPicture;
    }
    
    yield plant_.save()    
    response.redirect('/')
  }


  * doDelete (request, response) {
    const id = request.param('id');
    const plant_ = yield Plant.find(id);

    const isLoggedIn = yield request.auth.check()
    if (!isLoggedIn) {
      yield response.sendView('error', {})
      return
    }
    else if (request.currentUser.id !== plant_.user_id) {
      yield response.sendView('error', {})
      return 
    }

    yield plant_.delete()
    response.redirect('/')
  }


  * show (request, response) {
    const id = request.param('id');
    const plant_ = yield Plant.find(id);
    const plantReviews_ = yield Review.query().where('plant_id', id).orderBy('created_at', 'asc').fetch();

    for(let plantReview of plantReviews_) { 
      const id = plantReview.user_id;    
      const users_ = yield User.query().where('id', id).fetch();
      plantReview.user = users_.toJSON();
    }

    yield response.sendView('plantShow', {
      plant: plant_.toJSON(),
      reviews: plantReviews_.toJSON()
    })
  }


  * search (request, response) {
    yield response.sendView('search', {})
  }


  * doSearch (request, response) {
    const filter = {
      plantName: request.input('plantName') || '',
    }

    const plants_ = yield Plant.query()
      .where(function () {
        if (filter.plantName.length > 0) this.where('plantName', 'LIKE', `%${filter.plantName}%`)
      })

    yield response.sendView('plantSearch', {
      plants: plants_,
      filter
    })
  }


   * myPlants (request, response) {
      const myPlants = yield Plant.query().where('user_id', request.currentUser.id).orderBy('plantName', 'asc').fetch() 
      yield response.sendView('myPlants', {
      plants: myPlants.toJSON(),
    })
  }


  * createReview (request, response) {
      const isLoggedIn = yield request.auth.check()
      if (!isLoggedIn) {
        yield response.sendView('error', {})
        return
      }

      yield response.sendView('createReview', {});
  }
  

  * doCreateReview (request, response) {
    const reviewData = request.except('_csrf');

    reviewData.user_id = request.currentUser.id;
    reviewData.plant_id = request.param('id');

    const review = yield Review.create(reviewData)
    response.redirect('/')
  }

}

module.exports = PlantController
