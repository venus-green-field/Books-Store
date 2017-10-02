angular.module('book-store',[])
.component('app',{


controller: function(){
    this.books=window.data;

},






template: `<div><books  books="$ctrl.books"/></div>`
    
})

// `<div><search books="$ctrl.books"/></div>

// <div><books  books="$ctrl.books"/></div>`



