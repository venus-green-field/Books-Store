angular.module('book-store',['angular.filter'])
.component('app',{


controller: function($scope){
    this.books=window.data;
   
},






template:  `
<div>

<div >
<books  books="$ctrl.books"/>
</div>

</div>

    `
})

// <div  class="col-sm-2 sidenav"  style="margin-top:85px">
// <categories />
// </div>
// <div >
//  <table class="col-sm-2 sidenav" >
//  <tr>
//  <td><books  books="$ctrl.books"/></td>
//  <td><paid/></td>
//  </tr>
//  </table>
//  </div>`
// `<div><search books="$ctrl.books"/></div>

// <div><books  books="$ctrl.books"/></div>`



