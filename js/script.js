const fixButton = document.getElementById("fix");
const chatButton = document.getElementById("chat");

let child_name;
let message;

fixButton.addEventListener('click',()=>{
    child_name = document.getElementById('child_name').value;
    message = document.getElementById('message').value;
    const settings = document.querySelector('.settings');
    settings.style.opacity = '0';
    settings.style.zIndex = '-1';

    const lineContainer = document.querySelector('.line__container');
    lineContainer.style.opacity = '1';

});


chatButton.addEventListener('click',()=>{


});