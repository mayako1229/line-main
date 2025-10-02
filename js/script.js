const fixButton = document.getElementById("fix-button");
const chatButton = document.getElementById("chat-button");
const lineContents = document.querySelector('.line__contents');
let chatFlg = 0;
let childName;
let message;

//決定ボタン押下
fixButton.addEventListener('click',()=>{
    childName = document.getElementById('child-name').value;
    message = document.getElementById('message').value;
    const settings = document.querySelector('.settings');
    settings.style.opacity = '0';
    settings.style.zIndex = '-1';

    const lineContainer = document.querySelector('.line__container');
    lineContainer.style.opacity = '1';
    //サンタの最初のセリフのセット
    const santaChat = document.getElementById('santa-chat');
    santaChat.textContent = childName + '、ことしのプレゼントなにがほしいっていってますか？' 

});

//チャットボタン押下
chatButton.addEventListener('click',()=>{
    //時刻の取得
    let date= new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    //チャット内容の取得し、吹き出しに表示
    const chat = document.getElementById('chat');
    const myElement = document.createElement('div');
    myElement.setAttribute('class','line__right');
    myElement.innerHTML='<div class="text">' + chat.value + '</div>';
    myElement.innerHTML+='<span class="date">既読<br>' + hours + ':' + minutes + '</span>';
    lineContents.appendChild(myElement);

    //サンタのセリフは一秒後に表示
    setTimeout(() => {
        const santaElement = document.createElement('div');
        santaElement.setAttribute('class','line__left');
        if(chatFlg==1){
            //２回目の会話は設定で入れたメッセージを言う
            santaElement.innerHTML = `
            <figure><img src="images/24526426.jpg"></figure>
            <div class="line__left-text">
                <div class="name">サンタクロース</div>
                <div class="text">${message}</div>
            </div>
            `;

        }else{
            //一回目の会話
            santaElement.innerHTML = `
            <figure><img src="images/24526426.jpg"></figure>
            <div class="line__left-text">
                <div class="name">サンタクロース</div>
                <div class="text">${childName}がほしいのは${chat.value}だね！<br>わかりました!!<br>じゅんびしておきますね</div>
            </div>
            `;
            chatFlg++;
        }
        lineContents.appendChild(santaElement);
        //チャットの内容のクリア
        chat.value='';
        
    }, 1000); // 1秒後に表示
    

});