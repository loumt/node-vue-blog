
const localAppController = require('./../../../controller/LocalAppController');

/**
 * 打开本地应用测试
 */
module.exports = function(router){

    //RCP连接首页
    router.get('/rcp/test', localAppController.toIndex);


}