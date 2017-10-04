angular.module('book-store')
.component('categories',{
	bindings: {
		book:'<'
	},


	// controller: function(){
	// }.

template: `
<div class="list-group">

<a href="#" class="list-group-item list-group-item-info" 
style="width:220px ;height:75px;text-align: center ;margin-top:5px ;font-weight: 900;font-family: tahoma" >
{{$ctrl.book.gener}}
</a>

</div>

`
})

// template: `<div style="margin-top: 20px ;margin-left: 50px">
// 	<div style="margin-top: 20px ">
// 	<div>Career managment</div>
//     <div>Engineering</div>
//     <div>IT & Programming</div>
//     <div>natural sience</div>
// 	</div>

// 	`




// <div class="list-group">

// <a href="#" class="list-group-item list-group-item-success" 
// style="width:220px ;height:75px;text-align: center ;margin-top:5px ;font-weight: 900;font-family: tahoma" >
// Career managment
// </a>

// <a href="#" class="list-group-item list-group-item-info" ng-model="search"
// style="width:220px;height:75px ;text-align: center ;margin-top:10px ;font-weight: 900;font-family: tahoma">
// Engineering
// </a>

// <a href="#" class="list-group-item list-group-item-warning" ng-model="search" 
// style="width:220px ;height:75px ;text-align: center ;margin-top:10px;font-weight: 900 ;font-family: tahoma"">
// IT & Programming
// </a>

// <a href="#" class="list-group-item list-group-item-danger"  ng-model="search"
// style="width:220px ;height:75px ;text-align: center ;margin-top:10px;font-weight: 900 ;font-family: tahoma"">
// natural sience
// </a>


// </div>