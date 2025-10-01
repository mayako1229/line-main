const fixButton = document.getElementById("fix");
let child_name;
let message;

fixButton.addEventListener('click',()=>{
    child_name = document.getElementById('child_name').value;
    message = document.getElementById('message').value;
    const settings = document.querySelector('.settings');
//    settings.style.transition = "opacity 1s ease-in-out";
    settings.style.opacity = "0";
    const lineContainer = document.querySelector('.line__container');
   // lineContainer.style.transition = "opacity 1s ease-in-out";
    lineContainer.style.opacity = '1';

});