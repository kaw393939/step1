
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home',
                        content: 'This is my personal home page'
                      });
};

exports.about = function(req, res){
  res.render('index', { title: 'About',
                        content: 'This is my about page'
                      });
};

exports.products = function(req, res){
  res.render('products', { title: 'Products',
                           content: 'This is my products page'
                      });
};

exports.services = function(req, res){
  res.render('index', { title: 'Services',
                        content: 'This is my services page'
                      });
};

exports.contact = function(req, res){
  res.render('index', { title: 'Contact',
                        content: 'This is my personal home page'
                      });
};
