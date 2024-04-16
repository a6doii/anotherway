let ele=document.forms[0];
ele.addEventListener('submit',function(event){
    let in1=document.getElementById("user-name");
    let in2=document.getElementById("pass");
    let in3=document.getElementById("c-pass");
    let sp1=document.getElementById("u-alert");
    let sp2=document.getElementById("p-alert");
    let sp3=document.getElementById("cp-alert");
    let ck=false,ck2=false,ck3=false,ck4=false,ck5=false;
    if(in1.value==="")
    {
        sp1.innerHTML=`<p style="color:red">required</p>`;
        event.preventDefault();
    }
    else{
        sp1.innerHTML=``;
        ck2=true;
    }
    if(in2.value===""){
        sp2.innerHTML=`<p style="color:red">required</p>`;
        ck=true;
        event.preventDefault();
    }
    else{
        sp2.innerHTML=``;
        ck3=true; 
    }
    if(in3.value===""){
        sp3.innerHTML=`<p style="color:red">required</p>`;
        ck=true;
        event.preventDefault();
    }
    else{
        sp3.innerHTML=``;
        ck4=true;   
    }
    if(in2.value!==in3.value&&!ck){
        sp3.innerHTML=`<p style="color:red">password doesn't match confirmed password</p>`
        event.preventDefault();
    }
    else{
        // console.log(ck);
        if(!ck)
        {
            sp3.innerHTML=``;
            ck5=true;
        }
    }
    if(in1.value!==""&&in2.value!==""&&in3.value!==""&&ck2&&ck3&&ck4&&ck5){
        // add to the database of the site
        ele.action="./pages/home-page/Home.html";
    }
})
