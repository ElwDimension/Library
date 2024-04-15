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
    if(myLibrary[i].read){div.innerHTML+=` <div><input type="checkbox" id="${i}" checked><span id="label${i}"> Read</span></div>`}
    else{div.innerHTML+=` <div><input type="checkbox" id ="${i}"><span id="label${i}"> Not Read</span></div>`}
    container.appendChild(div);

    let box=document.querySelector(`input[id="${i}"]`);
    
    box.addEventListener('change',function(){
      console.log(this.id);
      let boxLabel=document.getElementById("label"+this.id);
      if(this.checked){console.log(" Read");
                        boxLabel.innerHTML="Read";
                        }
      else{console.log(" Not Read");
                        boxLabel.innerHTML=" Not Read";}
    });
    

}

const dialog = document.querySelector("dialog");
const addButton = document.querySelector('#addBook');
const closeButton=document.querySelector('#close');

addButton.addEventListener('click',()=>{dialog.showModal();});
closeButton.addEventListener('click', ()=>{clearForm(); dialog.close();})

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

let testbox=document.querySelector(`input[id="test1"]`);
    
    testbox.addEventListener('change',function(){
      let testboxLabel=document.getElementById("labeltest1");
      if(this.checked){console.log(" Read");
                        testboxLabel.innerHTML="Read";
                        }
      else{console.log(" Not Read");
                        testboxLabel.innerHTML=" Not Read";}
    });


