angular.module('book-store',[])
.component('app',{


controller: function(){
    this.books=window.data;

},






template: `<div><search/></div>

<div><books  books="$ctrl.books"/></div>`
    
})





