//this component for displaying google results search api
angular.module('book-store')
  .component('paid',{
	 controller: function($scope){
		this.books;
    //this function grap the data from the server using api(google search api)
		this.sendToken=function(){
        $.ajax({
             //async: false, 
             data:{token:this.token},
             url: "/search",
             type:'POST',
             dataType: 'json',
             success: function(result){
              	$scope.$ctrl.books=result;               
             }            
        })
    }
},

templateUrl:`../templates/paid.html`
})