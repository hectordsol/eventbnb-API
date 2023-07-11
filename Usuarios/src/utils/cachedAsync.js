module.exports = (fn) => {
    return function (req, res, next){
        fn(req,res).catch((error) => {
            console.log("cacheando ",error)
            next(error);//salta al manejador de error de express
        });
    };
};