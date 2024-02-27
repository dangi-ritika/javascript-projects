const ourItemdiv = document.getElementsByClassName('item');
const openIcon = document.getElementsByClassName('iconOpen');
const closeIcon = document.getElementsByClassName('iconClose');

for(let i = 0; i < ourItemdiv.length; i++){
    closeIcon[i].style.display = "none";
    ourItemdiv[i].addEventListener('click', () =>{
      const result =  ourItemdiv[i].classList.toggle("active");
    if(result){
        closeIcon[i].style.display = "block";
        openIcon[i].style.display = "none";
    }
    else{
        closeIcon[i].style.display = "none";
        openIcon[i].style.display = "block";
    }
 });
}