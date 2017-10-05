//this component for displaying google results search api
angular.module('book-store')
  .component('paid',{
	 controller: function($scope){
		this.books;
    //this function grap thae data from the server using api(google search api)
		this.sendToken=function(){
        $.ajax({
             //async: false, 
             data:{token:this.token},
             url: "http://localhost:1128/search",
             type:'POST',
             dataType: 'json',
             success: function(result){
              	$scope.$ctrl.books=result;               
             }            
        })
    }
},

template: `<div >
<div class="form-inline my-2 my-lg-0" style="margin-top: -33px;" >
<input ng-model="$ctrl.token"  class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
<button ng-click ='$ctrl.sendToken()'style=" margin-top: 9px" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</div>
<div style="margin-top: 20px" ng-repeat ='book in $ctrl.books'>
<img src={{book.thumbnail}} style=" width:200px ;margin-top:20px ;border-style: solid " />
{{book.title}}
<a href ={{book.link}}>{{book.title}}</a>

</div>

<div style="margin-top: 20px;font-weight:800 ;font-family: tahoma">
 
</div>
<div style="margin-top: 20px;font-weight:700 ;font-family: tahoma ">
</div>
<div style="margin-top: 20px ;font-weight:700 ;font-family: tahoma">

</div>
</div>`
})