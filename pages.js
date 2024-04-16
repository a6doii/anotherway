let get=document.getElementsByClassName("log-out")[0].style.display="none";
// get if the user logged in or not from data base
// if he/she is logged in we will display log out link and hide log in page
let check;
if(check){
    document.getElementsByClassName("log-in")[0].style.display="none";
    get.style.display="block";
}
// search needs data base 
// this part is done by data base but we give an example
let checkAdmin;// add book page is only available for admins
if(!checkAdmin){
    let get=document.getElementsByClassName("add-book")[0];
    get.style.display="none";
}
let getBorrowedBooks=[];//from database
let getBorrowedBooks2=[];
let divs=document.querySelectorAll(".book");
divs.forEach(function(ele){
    let q=ele.classList;
    let t=ele.getElementsByClassName("unborrowButton")[0];
    t.style.display="none";
    // console.log(t);
    let q2=ele.querySelector(".available");
    if(getBorrowedBooks.includes(`${q[0]}`)){
        t.style.display="block";
        q2.textContent="Borrowed";
        ele.getElementsByClassName("borrowButton")[0].style.display="none";
    }
})
// console.log(divs);
divs.forEach(function(ele){
    let q=ele.querySelector(".available");
    let button=ele.querySelector(".borrowButton");
    let button2=ele.getElementsByClassName("unborrowButton")[0];
    button.onclick=function(){
        getBorrowedBooks2.push(`${ele.classList[0]}`)
        // console.log(q);
        // console.log(button);
        // console.log(button2);
        q.textContent="Borrowed";
        button2.style.display="block";
        button.style.display="none";
        // console.log(getBorrowedBooks2);
    }
    button2.onclick=function(){
        getBorrowedBooks2.push(`${ele.classList[0]}`)
        // console.log(q);
        // console.log(button);
        // console.log(button2);
        // let getele=getBorrowedBooks2.indexOf(`${ele.classList[0]}`);
        let q3=`${ele.classList[0]}`;
        // console.log(typeof q);
        getBorrowedBooks2=getBorrowedBooks2.filter(function(ele,index){
            return ele!==q3;
        })
        q.textContent="Available";
        button.style.display="block";
        button2.style.display="none";
        // console.log(getBorrowedBooks2);
    }
});
// add getBorrowedBooks2 to data base;
