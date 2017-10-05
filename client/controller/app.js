angular.module('book-store',['angular.filter'])
.component('app',{
	controller: function($scope){
		this.books=window.data;
	},
	template:`
		<div>
		<div >

		<books  books="$ctrl.books"/>
		</div>
		</div<div><paid/>
		</div>
	`
})



