const addBtn= document.getElementById("add");
const showBtn=document.getElementById("show");
const fCloseBtn=document.getElementById("formClose");
const formCon=document.getElementById("formContainer");
const books=document.getElementById("books");
const bCloseBtn=document.getElementById("bookClose");
const content=document.getElementById("content");
const fAuthor=document.getElementById("author");
const fTitle=document.getElementById("title");
const nPages=document.getElementById("pages");
const fRead=document.getElementsByName("read");
const submitBtn=document.getElementById("submit");
const myLibrary =[{
    id:"gotmohamed",
    author:"mohamed",
    title:"GOT",
    pages: 785,
    read:true,

},{
    id:"ringsofpowerhamdy",
    author:"Hamdy",
    title:"Rings Of Power",
    pages: 456,
    read:true,

}
];
function Book(author,title,pages,read){
    this.id =title.toLowerCase()+author.toLowerCase(); 
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.read=read;
};
function addBookToLibrary(author,title,pages,read){
    const newBook ={id:title.toLowerCase()+author.toLowerCase(),
        author:author,
        title:title,
        pages: pages,
        read:read,}
    myLibrary.push(newBook);
    console.log(myLibrary);
    update();
    
}
const update=()=>{
    content.innerHTML=``;
    myLibrary.forEach(book => {
        content.innerHTML+=`<div class="card" id="${book.id}">
             <h4>Author: ${book.author}</h4>
             <h4>Title: ${book.title}</h4>
             <h4>Number Of Pages: ${book.pages}</h4>
             <h4>Read Status: ${book.read}</h4>
            <button onclick="readBook(this)" type="button" class="btn">read</button>
             <button onclick="deleteBook(this)" type="button" class="btn">Delete</button> 
        

        </div>`;
    });

}


const deleteBook = (buttonEl) => {
    const bookIndex = myLibrary.findIndex(
      (item) => item.id === buttonEl.parentElement.id
    );
    buttonEl.parentElement.remove();
    myLibrary.splice(bookIndex, 1);
    update();
};
const readBook = (buttonEl) => {
    const bookIndex = myLibrary.findIndex(
      (item) => item.id === buttonEl.parentElement.id
    );
    myLibrary[bookIndex].read= !myLibrary[bookIndex].read;
    update();
};
addBtn.addEventListener("click",()=>{
    formCon.classList.toggle("hidden");  
    event.preventDefault();

})
fCloseBtn.addEventListener("click",()=>{
    formCon.classList.toggle("hidden");  
    event.preventDefault();

})

showBtn.addEventListener("click",()=>{
    update();
    books.classList.toggle("hidden");  
    event.preventDefault();

    })
bCloseBtn.addEventListener("click",()=>{
    books.classList.toggle("hidden");  
    event.preventDefault();

})

submitBtn.addEventListener("click",()=>{

    addBookToLibrary(fAuthor.value,fTitle.value,nPages.value,fRead[0].value.checked?fRead[0].value:fRead[1].value);
    update();
    event.preventDefault();
    formCon.classList.toggle("hidden");  

})

