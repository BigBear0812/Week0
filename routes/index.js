
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home Page' });
};
exports.page1 = function(req, res){
  res.render('page1', { title: 'Page 1' });
};
exports.page2 = function(req, res){
  res.render('page2', { title: 'Page 2' });
};
exports.page3 = function(req, res){
  res.render('page3', { title: 'Page 3' });
};
exports.page4 = function(req, res){
  res.render('page4', { title: 'Page 4' });
};
exports.page5 = function(req, res){
  res.render('page5', { title: 'Page 5' });
};