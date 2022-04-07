const authController = require('../app/http/controllers/authController');
const homeController = require('../app/http/controllers/homeController');
const cartController = require('../app/http/controllers/cartController');

function initRoutes(app){
    app.get('/',homeController().index);
    
    app.get('/cart',cartController().cart);
    
    app.get('/login',authController().login);
    app.get('/register',authController().register);
}
module.exports=initRoutes;
