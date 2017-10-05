angular.module('book-store')
.component('books',{

  bindings: {

    books:'<'

  },

  controller: function($scope){
    //This part to store comment in the database and bring all the comments on the book in the database
    this.coment;
    this.coments;
    this.sendComent=function(){
      $.ajax({
           async: false, 
           data:{
            id : this.activeBook._id ,
            coment:this.coment
           },
           url: "http://localhost:1128/coment",
           type:'POST',
           dataType: 'json',
           success: function(result){
             $scope.$ctrl.coments=result;
             console.log($scope.$ctrl.coments)
           }
      })
    }
    //this part to handle the filter of catogories 
    $scope.selected=[];
    $scope.geners=['Career & Study advice','Engineering','IT & Programming','Natural Sciences','others'];
    
    $scope.exist=function(index){
      var  gener=$scope.geners[index];
      var search = $('#search').val();
      if(search===gener){
        $scope.search='';
      }else{
       $scope.search=gener;
      }
    }
    $scope.toggleSlection= function(item){
      var idx= $scope.selected.indexOf(item);
      if(idx> -1){
        $scope.selected.splice(idx,1);
      }
      else{
        $scope.selected.push(item);
      }
      $scope.$ctrl.books = $scope.selected;
    },
   // this function determine the book clicked in the modal
    this.activeBook={};
    this.changeBook=function (index){
      this.activeBook=index;
    }
  
},



template:`<div class="form-inline my-2 my-lg-0" >
<input id="search" ng-model="search" style="width:800px ; margin-top: 2px ;margin-left:300px" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
</div>


<div>
<div class="col-sm-2" style="margin-top:50px">
<div ng-repeat="book in geners" >
<div class="list-group">

<a href="#" class="list-group-item list-group-item-info" 
style="width:220px ;height:75px;text-align: center ;margin-top:5px ;font-weight: 900;font-family: tahoma" ng-model="cc">
<input type = "checkbox"  value={{book}}  ng-checked="ischecked" ng-click='exist($index)'> {{book}}
</a> 

</div>
</div>
</div>
<div class="col-sm-6"> <div class="col-sm-4" ng-repeat="book in $ctrl.books | filter :search |filter : cc "  
>      
<div>
<div style="margin-left: 50px;margin-top: 50px ">
<div>

<img  style="width: 200px ;height = 200px "  src={{'../image/'+book.image}} 
class="btn btn-primary pull-right" 
data-toggle="modal" 
data-target="#book-info" 
ng-click="$ctrl.changeBook(book)"/>

<div style="margin-left: 15px ">
<div style="margin-top: 20px;font-weight:800 ;font-family: tahoma">
{{book.title}}
</div>
<div style="margin-top: 20px;font-weight:700 ;font-family: tahoma ">
{{book.gener}}
</div>
<div style="margin-top: 20px ;font-weight:700 ;font-family: tahoma">
{{book.Auther}}
</div>
<div style="margin-top: 20px">
<a href={{'../pdf/'+book.pdf}} download>
<button>Download</button>
</a> </div>

</div>

<div class="modal fade" id="book-info"  role="dialog" >
<div class="modal-dialog">
<div class="modal-content" style=" width :800px">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal">&times;</button>
<h3>{{$ctrl.activeBook.title}}</h3>
</div>
<div class="modal-body">
<div class="container-fluid">
<div class="row content">

<div class="col-sm-4 sidenav">
<img src={{'../image/'+$ctrl.activeBook.image}} style=" width:200px ;margin-top:20px ;border-style: solid ;border-width: 8px" />
</div>

<div class="container-fluid">
<p><span style="font-weight:900"> AUTHOR :</span> {{$ctrl.activeBook.Auther}}</p>
<p><span style="font-weight:900"> PAGES : </span> {{$ctrl.activeBook.pages}}</p>
<p><span style="font-weight:900"> RATING : </span> {{$ctrl.activeBook.rating}}</p>
<p><span style="font-weight:900"> DESCRIPTION : </span><br>  {{$ctrl.activeBook.description}} </p>
<p><span style="font-weight:900 ;margin-left:20px"> RATING : </span>
<span><input type="radio" name="rating" id="str5" value="5"><label for="str5"></label></span>
<span><input type="radio" name="rating" id="str4" value="4"><label for="str4"></label></span>
<span><input type="radio" name="rating" id="str3" value="3"><label for="str3"></label></span>
<span><input type="radio" name="rating" id="str2" value="2"><label for="str2"></label></span>
<span><input type="radio" name="rating" id="str1" value="1"><label for="str1"></label></span>
</p>

<form method='post'>
Comment:<br />
<textarea ng-model="$ctrl.coment" name='comment' id='comment'></textarea><br />
<input  ng-click ='$ctrl.sendComent()' type='submit' value='Send' />  
</form>
</div>

<div ng-repeat ="coment in $ctrl.coments" >
<div href="#" class="list-group-item list-group-item" 
style="width:500px ;height:75px;text-align: left ;margin-top:5px;margin-left:200px ;font-weight: 900;font-family: tahoma" >
{{coment.text}}
</div> 


</div>
</div>
</div>

<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
</div>

</div>

</div>
</div>
</div>
</div>

</div>


</div> </div>
</div>
`

})

