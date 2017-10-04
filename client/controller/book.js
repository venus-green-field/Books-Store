angular.module('book-store')
.component('book',{
    bindings: {
        book:'<'
    },


    controller: function(){
        
    	this.activeBook={};
    	this.changeBook=changeBook;
    	function changeBook(index){
    		this.activeBook=index;
    	}

},

template: `
<div>
<div style="margin-left: 50px;margin-top: 50px ">
<div>

<img  style="width: 200px ;height = 200px "  src=  {{'..'+$ctrl.book.image}} 
class="btn btn-primary pull-right" 
data-toggle="modal" 
data-target="#book-info" 
ng-click="$ctrl.changeBook($ctrl.book)"/>

<div style="margin-left: 15px ">
<div style="margin-top: 20px;font-weight:800 ;font-family: tahoma">
{{$ctrl.book.title}}
</div>
<div style="margin-top: 20px;font-weight:700 ;font-family: tahoma ">
{{$ctrl.book.gener}}
</div>
<div style="margin-top: 20px ;font-weight:700 ;font-family: tahoma">
{{$ctrl.book.auther}}
</div>
<div style="margin-top: 20px">
<a href={{'..'+$ctrl.book.path}} download>
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
<img src={{'..'+$ctrl.book.image}} style=" width:200px ;margin-top:20px ;border-style: solid ;border-width: 8px" />
</div>

<div class="container-fluid">
<p><span style="font-weight:900"> AUTHOR :</span> {{$ctrl.book.auther}}</p>
<p><span style="font-weight:900"> PAGES : </span> 78</p>
<p><span style="font-weight:900"> RATING : </span> {{$ctrl.book.rating}}</p>
<p><span style="font-weight:900"> DESCRIPTION : </span><br>  {{$ctrl.book.descreption}} </p>
<p><span style="font-weight:900 ;margin-left:20px"> RATING : </span>
<span><input type="radio" name="rating" id="str5" value="5"><label for="str5"></label></span>
<span><input type="radio" name="rating" id="str4" value="4"><label for="str4"></label></span>
<span><input type="radio" name="rating" id="str3" value="3"><label for="str3"></label></span>
<span><input type="radio" name="rating" id="str2" value="2"><label for="str2"></label></span>
<span><input type="radio" name="rating" id="str1" value="1"><label for="str1"></label></span>
</p>
<form method='post'>
  Comment:<br />
  <textarea name='comment' id='comment'></textarea><br />

 <input type='hidden' name='articleid' id='articleid' value='<? echo $_GET["id"]; ?>' />

 <input type='submit' value='Send' />  
</form>
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
</div>`
})


