/**
 * 首页
 */
exports.toIndex = function (req, res, next) {
  res.render('rcp/index', {title: 'Hello Index!!!!'})
}
