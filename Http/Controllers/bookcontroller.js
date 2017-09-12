// var crew  =   require('../module/cport/crew');

//exports allow access the method in other files.

var _books = require('../Models/BooksModels')
 exports.index   =   function(req, res){

        var data = "this is inside the controller   ";
        data =  _books.displayAll(data);
        console.log(data);
        res.send(data);
        //  res.send(data);
      // _books.displayAll(data).then(function(response_data) {
      //   res.send(response_data);
      //
      // },function(error){
      //   res.send(error);
      // }
    // );
    // // var username   =   req.body.username;
    // // var password   =   req.body.password;
    // //  //crew will working like a model(core) to access the database and function upon it
    // //  //                       parameters to be passed
    // // crew.authenticate(username,password).then(function(data){
    //   //return statement
    //   var data = "this is index in controller  ";
    //   res.send(data);
    //
    // // },function(error){
    // //   res.send(error);
    // // });
 }
