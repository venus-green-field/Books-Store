angular.module('book-store')
.component('books',{

 bindings: {
 
  books:'<'

},

controller: function(){
  this.book;
  this.sendToken=function(){
    $.ajax({
      async: false, 
      data:{token:this.token},
      url: "http://localhost:1128/search",
      type:'POST',
      dataType: 'json',
      success: function(data){
        console.log(data);
        this.book=data;
      }
    })
  }
},



template:`<div class="form-inline my-2 my-lg-0" >
<input ng-model="search" style="width:800px ; margin-top: 2px ;margin-left:300px" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
</div>


<div>
<div class="col-sm-2" style="margin-top:50px">
<div ng-repeat="book in $ctrl.books | unique : 'gener'" >
<div class="list-group">

<a href="#" class="list-group-item list-group-item-info" 
style="width:220px ;height:75px;text-align: center ;margin-top:5px ;font-weight: 900;font-family: tahoma" ng-model="cc">
 {{book.gener}}
</a>
</div>
</div>
</div>
<div class="col-sm-8"> <book  class="col-sm-4" ng-repeat="book in $ctrl.books | filter :search |filter : cc  "  
book="book"/> </div>
</div>
`

})

// `<div class="form-inline my-2 my-lg-0" >
//                         <input ng-model="$ctrl.token" style="width:750px ; margin-top: 2px ;margin-left:200px" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
//                         <button ng-click ='$ctrl.sendToken()'style=" margin-top: 2px; margin-left:20px " class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                         </div>
//     <table>
// <tr>
// <td><categories ng-repeat="book in $ctrl.books "  
// book="book"/></td>

//    <td> <book ng-repeat="book in $ctrl.books | filter :$ctrl.token "  
//     book="book"/> </td>
// </tr>
// </table>
//     `