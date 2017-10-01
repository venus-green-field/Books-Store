angular.module('book-store')
.component('book',{
    bindings: {
        book:'<'
    },


    controller: function(){
//         this.book={
//  title:'Get the entire “IT & Programming” category',
//   genre:'IT & Programming”',
//   description:'all books that you need to learn programming are here.',
//   author:'many',
//   img_url:'../data/python.jpe'
// } 
    },

    template: `<li style="margin-left: 250px;margin-top: 20px ">
    

    <img  style="width: 200px ;height = 200px "  src=  {{'..'+$ctrl.book.image}} />
    </div>
    <div>
    <div style="margin-top: 20px ">
     {{$ctrl.book.title}}
    </div>
    
    <div style="margin-top: 20px ">
    <a href={{'..'+$ctrl.book.path}} download>
     <button>Download</button>
    </a> <div>
    </div>
    </li>`
})