angular.module('book-store')
.component('search',{
	controller:function(){
		this.books;
		this.sendToken=function(){
		$.ajax({
			async: false, 
  		 	 data:{token:this.token},
             url: "http://localhost:1128/search",
              type:'POST',
              dataType: 'json',
              success: function(data){
    		  	this.book=data;
            }, 

        })
    
      }
      	
		

	},
	




	template: `<div class="form-inline my-2 my-lg-0" >
						<input ng-model="$ctrl.token" style="width:700px ; margin-top: 9px" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
						<button ng-click ='$ctrl.sendToken()'style=" margin-top: 9px" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</div>
						<div><books books='$ctrl.books'/></div>`
})



	// template: `<div >
	// <input
	// type="text"
	// />
	// <button > Search </button>
	// </div>`