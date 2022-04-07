function homeController(){
    return{
        login(req,res){
            res.render('home');
        }
    }
}
module.exports = homeController;