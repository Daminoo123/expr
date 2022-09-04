var day = new Date().getDay();
var hour = new Date().getHours();
function test(req,res,next){
    if (1<=day<=5 && 8<=hour<=17 ){
        return next();
    }
    else res.render('erreur')
};
module.exports=test