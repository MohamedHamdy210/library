const addBtn= document.getElementById("add");
const showBtn=document.getElementById("show");
const fCloseBtn=document.getElementById("formClose");
const formCon=document.getElementById("formContainer");
const books=document.getElementById("books");
const bCloseBtn=document.getElementById("bookClose");
const content=document.getElementById("content");
const myLibrary =[{
    author:"mohamed",
    title:"GOT",
    pages: 785,
    read:true,

},{
    author:"Hamdy",
    title:"Rings Of Power",
    pages: 456,
    read:true,

}
];
function Book(author,title,pages,read){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.read=read;
};
function addBookToLibrary(author,title,pages,read){
    const newBook = new Book(author,title,pages,read);
    myLibrary.push(newBook);

    
}
console.log(myLibrary)
const update=()=>{
   content.innerHTML=``
    myLibrary.forEach(book => {
        content.innerHTML+=`<div class="card">
             <h4>Author: ${book.author}</h4>
             <h4>Title: ${book.title}</h4>
             <h4>Number Of Pages: ${book.pages}</h4>
             <h4>Read Status: ${book.read}</h4>
            

        </div>`;
    });

}













addBtn.addEventListener("click",()=>{
    formCon.classList.toggle("hidden");  
})
fCloseBtn.addEventListener("click",()=>{
    formCon.classList.toggle("hidden");  
})

showBtn.addEventListener("click",()=>{
    update();
    books.classList.toggle("hidden");  
    
    })
bCloseBtn.addEventListener("click",()=>{
    books.classList.toggle("hidden");  
})



