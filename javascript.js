const myLibrary = [];

function Book(title,author,pages,read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

function addBookToLibrary() {
  /*myLibrary.forEach(element => {
    var div=document.createElement('div');
    div.className='book';
    div.innerHTML=`<p>boop</p>`;
    document.getElementById('#books').appendChild(div);
  }); */


}

const dialog = document.querySelector("dialog");
const addButton = document.querySelector('#addBook');
const closeButton=document.querySelector('#close');

addButton.addEventListener('click',()=>{dialog.showModal();});
closeButton.addEventListener('click', ()=>{dialog.close();})

//document.querySelector('form').addEventListener('submit', (e) => {
//  e.preventDefault();
//});

var form = document.querySelector("form");
    form.onsubmit = function(){
    	
    	let newtitle = document.getElementById('title').value;
    	/* newauthor =  document.getElementById("author").value;
    	newpages =  document.getElementById("pages").value;
    	newread = document.querySelector("input[name='read']:checked").value;

    	newBook = new Book(newtitle,newauthor,newpages,newread);
    	myLibrary.push(newBook); 
      addBookToLibrary(); */
      alert `newtitle`;
    }


