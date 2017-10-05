module.exports = function (app) {

  app.dataSources.mysql.automigrate('AccessToken',function (err) {
    if(err) throw err;
  }); //ACL
  app.dataSources.mysql.automigrate('ACL',function (err) {
    if(err) throw err;
  }); //ACL
    app.dataSources.mysql.automigrate('User',function (err) {
    if(err) throw err;
  }); //ACL
};