angular.module('book-store')
.component('login',{
	
	template:`<input type="button" value="Login" 
	style=" margin-top: 9px ; margin-left: 20px " 
	class="btn btn-outline-success my-2 my-sm-0" 
	type="submit"
	onclick="document.getElementById('id01').style.display='block'"  "/>
	<div id="id01" class="modal">

	<form class="modal-content animate" action="/action_page.php">
	<div class="imgcontainer">
	<span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
	</div>

	<div class="container">
	<div>
	<label><b>Username</b></label>
	<input type="text" placeholder="Enter Username" name="uname" required  style="width:950px">
	</div>
	<div>
	<label><b>Password</b></label>
	<input type="password" placeholder="Enter Password" name="psw" required style="width:950px">
	</div> 
	<button type="submit" style="margin-right:50px">Login</button>
	</div>

	<div class="container" style="background-color:#f1f1f1 ; width:1075px">
	<p>
	<a >Create an Account </a>
	<p>
	<button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
	</div>
	</form>
	</div>
	`
})