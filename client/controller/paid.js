angular.module('book-store')
.component('paid',{
	// bindings: {
	// 	book:'<'
	// },


	controller: function($scope){
		console.log('hi')
		this.books;
		this.sendToken=function(){
        $.ajax({
           // async: false, 
             data:{token:this.token},
             url: "http://localhost:1128/search",
              type:'POST',
              dataType: 'json',
              success: function(result){
              	$scope.$ctrl.books=result;
                console.log($scope.$ctrl.books[0])
               
         }
                

                //window.location='google.html'
                // window.data=result;
                // console.log(window.data)
            
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