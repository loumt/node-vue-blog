

/**
 * 首页
 */
exports.toIndex = function(req,res,next){
    res.render('clipboard/index',{title:'Hello Index!!!!'});
}