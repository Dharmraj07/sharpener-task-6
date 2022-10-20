
let item=document.querySelectorAll("li");
item[1].style.color="green"
for(i=0; i<item.length; i+=2){
    item[i].style.backgroundColor="green";
}
item[2].textContent="     .";
