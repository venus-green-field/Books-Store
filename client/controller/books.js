angular.module('book-store')
.component('books',{

   bindings: {
        books:'<'
    },

    controller: function(){
//         this.books=[
// {
//  title:'Get the entire “IT & Programming” category',
//   genre:'IT & Programming”',
//   description:'all books that you need to learn programming are here.',
//   author:'many',
//   img_url:'python.jbe'
// },{
//  title:'Get the entire “IT & Programming” category',
//   genre:'IT & Programming”',
//   description:'all books that you need to learn programming are here.',
//   author:'many',
//   img_url:'python.jbe'
// },{
//  title:'Get the entire “IT & Programming” category',
//   genre:'IT & Programming”',
//   description:'all books that you need to learn programming are here.',
//   author:'many',
//   img_url:'python.jbe'
// },{
//  title:'Get the entire “IT & Programming” category',
//   genre:'IT & Programming”',
//   description:'all books that you need to learn programming are here.',
//   author:'many',
//   img_url:'python.jbe'
// }
// ] ;




    // $scope.getBooks = function(){
    //     $http.get('/books').success(function(response){
    //         $scope.books = response;
    //     });
    // }
    },


    template:`<ul >
    <book ng-repeat="book in $ctrl.books"  
    book="book"/></ul>`
    
})