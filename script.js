const dropDownDivs=document.querySelectorAll(".dropDown-divs");
const list=document.getElementById("logo-list");
const burger=document.getElementById("burger");
const close=document.getElementById("close");
const body =document.getElementById("main-left")
const hiddenNav=document.getElementById("hidden-nav");
const hiddenList=document.querySelectorAll(".hidden-list");
show=(id)=>{
    if(id==="features"){
        hide();
        dropDownDivs[0].classList.remove("hiden");
        
    }else{
        hide();
        dropDownDivs[1].classList.remove("hiden")
    }
}
hide=()=>{
    
  for (let i=0;i<dropDownDivs.length;i++){
    if(!dropDownDivs[i].classList.contains("hiden")){
        dropDownDivs[i].classList.add("hiden");
    }
  }
}
list.addEventListener("mouseover",(e)=>{  
    e.stopPropagation();
const classlist=e.target.classList;
console.log(classlist)
if(classlist.contains("features")){
    show("features");
}else if(classlist.contains("company")){
    show("company");
}else{
    hide();
}
},true)

list.addEventListener("mouseleave",(e)=>{
    hide();
})
dropDownDivs[0].addEventListener("mouseover",(e)=>{
    show("features");
})
dropDownDivs[1].addEventListener("mouseover",(e)=>{
    show("company");
})
for (let i=0;i<dropDownDivs.length;i++){
    dropDownDivs[i].addEventListener("mouseleave",(e)=>{
        hide();
    })
}
burger.addEventListener("click",()=>{
    hiddenNav.classList.remove("hiden")
})
close.addEventListener("click",()=>{
    hiddenNav.classList.add("hiden")
})
hiddenNav.addEventListener("click",function(e){
   if(e.target.id==="features2"){
    if(hiddenList[0].classList.contains("hiden")){
        hiddenList[0].classList.remove("hiden")
    }else{
        hiddenList[0].classList.add("hiden")
    }
   }else if(e.target.id==="company2"){
    if(hiddenList[1].classList.contains("hiden")){
        hiddenList[1].classList.remove("hiden")
    }else{
        hiddenList[1].classList.add("hiden")
    }
   }
})