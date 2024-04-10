const container=document.querySelector('#books');
let i=0;

const myLibrary = [];

function Book(title,author,pages,read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

function addBookToLibrary() {
  
    let div=document.createElement('div');
    div.className="book";
    div.innerHTML=` <p>${myLibrary[i].title}</p>
                    <p>${myLibrary[i].author}</p>
                    <p>${myLibrary[i].pages}</p>`;
    if(myLibrary[i].read){div.innerHTML+=` <p>Read</p>`}else{div.innerHTML+=` <p>Not Read</p>`}
    container.appendChild(div);
  

}

const dialog = document.querySelector("dialog");
const addButton = document.querySelector('#addBook');
const closeButton=document.querySelector('#close');

addButton.addEventListener('click',()=>{dialog.showModal();});
closeButton.addEventListener('click', ()=>{dialog.close();})

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let newTitle = document.getElementById('title').value;
  let newAuthor = document.getElementById('author').value;
  let newPages = document.getElementById('pages').value;
  let newRead;
  if (document.querySelector("input[name='read']:checked").value=="yes"){newRead=true;} else {newRead=false;}
  let newBook = new Book(newTitle,newAuthor,newPages,newRead);
  myLibrary.push(newBook);
  clearForm();
  dialog.close();
  addBookToLibrary();
  i++;
});

function clearForm(){
  document.getElementById('title').value='';
  document.getElementById('author').value='';
  document.getElementById('pages').value='';
  document.getElementById("yes").checked = false;
  document.getElementById("no").checked = false;
}

/*var form = document.querySelector("form");
    form.onsubmit = function(){
    	form.preventDefault();
    	let newtitle = document.getElementById('title').value;
    	/* newauthor =  document.getElementById("author").value;
    	newpages =  document.getElementById("pages").value;
    	newread = document.querySelector("input[name='read']:checked").value;

    	newBook = new Book(newtitle,newauthor,newpages,newread);
    	myLibrary.push(newBook); 
      addBookToLibrary(); 
      alert `newtitle`;
    }*/


