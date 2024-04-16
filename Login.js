
let ele = document.forms[0];
let logged=false;
console.log(get);
let users={"ali":"20221106"};// need data base to fill this array
ele.addEventListener('submit', function(event) {
    let in1 = document.getElementById("User-Name");
    let in2 = document.getElementById("Password");
    let alt=document.getElementById("alert");
    if (in1.value === "") {
        alt.innerHTML=`<span style="color:red;">please fill your user name and password</span>`;
        event.preventDefault();
}
else{
if(users[in1.value]===in2.value){
    if(users[in1.value]=="ali"&& users[in2.value]=="20221106" ){
    logged=true;
ele.action="./pages/home-page/Home.html";
}
else{
    alt.innerHTML=`<span style="color:red;">invalid username or password</span>`;
    event.preventDefault();
}
}
}
});
if(logged===true){

}
// database is needed to save the state of the object
