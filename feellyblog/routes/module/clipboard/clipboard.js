
const clipBoardController = require('./../../../controller/ClipBoardController');

/**
 * 打开本地应用测试
 */
module.exports = function(router){

    //RCP连接首页
    router.get('/clipboard/test', clipBoardController.toIndex);


}