const fixButton = document.getElementById("fix-button");
const chatButton = document.getElementById("chat-button");
const lineContents = document.querySelector('.line__contents');
let firstChatFlg = true;
let childName;
let message;
window.scrollTo(0, 0);
//決定ボタン押下
fixButton.addEventListener('click',()=>{
    childName = document.getElementById('child-name').value;
    message = document.getElementById('message').value;
    if(childName == ''){
        document.getElementById('child-name-error').textContent='お名前を入力して下さい';
    }else{
        document.getElementById('child-name-error').textContent='';
    }
    if(message == ''){
        document.getElementById('message-error').textContent='メッセージを入力して下さい';        
    }else{
        document.getElementById('message-error').textContent='';
    }
    if(childName == ''||message == ''){
        return;
    } 
    const settings = document.querySelector('.settings');
    settings.style.opacity = '0';
    settings.style.zIndex = '-1';

    const lineContainer = document.querySelector('.line__container');
    lineContainer.style.opacity = '1';
    //サンタの最初のセリフのセット
    const santaChat = document.getElementById('santa-chat');
    santaChat.textContent = childName + '、ことしのプレゼントはなにがほしいっていってますか？' 

});

//チャットボタン押下
chatButton.addEventListener('click',()=>{
    //時刻の取得
    let date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    //チャット内容の取得し、吹き出しに表示
    const chat = document.getElementById('chat');
    const chatVal = chat.value;
    if(chatVal == ''){
        return;     
    }
    const myElement = document.createElement('div');
    myElement.setAttribute('class','line__right');
    myElement.innerHTML = `
        <div class="text">${chatVal}</div>
        <span class="date">既読<br>${hours}:${minutes}</span>
        `;
    lineContents.appendChild(myElement);
    //チャットの内容のクリア
    chat.value = '';

    //サンタのセリフは一秒後に表示
    setTimeout(() => {
        const santaElement = document.createElement('div');
        santaElement.setAttribute('class','line__left');
        if(firstChatFlg){
            //一回目の会話
            santaElement.innerHTML = `
            <figure><img src="images/24526426.jpg"></figure>
            <div class="line__left-text">
                <div class="text">${childName}がほしいのは${chatVal}だね！<br>わかりました🎅<br>じゅんびしておきますね</div>
            </div>
            <span class="date">${hours}:${minutes}</span>
            `;
            firstChatFlg = false;
        } else {
            //２回目の会話は設定で入れたメッセージを言う
            santaElement.innerHTML = `
            <figure><img src="images/24526426.jpg"></figure>
            <div class="line__left-text">
                <div class="text">${message}</div>
            </div>
            <span class="date">${hours}:${minutes}</span>
            `;
        }
        lineContents.appendChild(santaElement);
        
    }, 1000); // 1秒後に表示
    

});