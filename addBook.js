let get=document.getElementsByClassName("log-out")[0].style.display="none";
// get if the user logged in or not from data base
// if he/she is logged in we will display log out link and hide log in page
let check;
if(check){
    document.getElementsByClassName("log-in")[0].style.display="none";
    get.style.display="block";
}
// // from database 
// let q=document.getElementById("searchbutton").value;
// let books=[];//get all books from database
// let getindex=books.indexOf(q);

