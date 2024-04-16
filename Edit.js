let ele = document.forms[1];
// console.log(ele);
// let obj={ob1:{name:}}
ele.addEventListener('submit', function(event) {
    // event.preventDefault(); // Prevent the default form submission behavior
    let in1 = document.getElementById("bookName");
    console.log(in1);
    let in2=document.getElementById("category");
    // event.preventDefault();
    let sp=document.getElementById("alert");
    if(in1.value===""||in2.value===""){
        sp.innerHTML=`<p style="color:brown">please enter the book name and the categorey</p>`;
        event.preventDefault();
    }
    else{
        sp.innerHTML=``;
        event.preventDefault();
    }
    // need database to continue the code
    
});
// from database 
// let q=document.getElementById("searchbutton").value;
// let books=[];//get all books from database
// let getindex=books.indexOf(q);

