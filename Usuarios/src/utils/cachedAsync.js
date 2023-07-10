module.exports = (fn) => {
    return function (req, res, next){
        fn(req,res).catch((error) => {
            console.log("error :0", error)
            next(error);//salta al manejador de error de express
        });
    };
};