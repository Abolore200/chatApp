document.addEventListener('DOMContentLoaded', function(){
    const profileBg = document.querySelector('.ms-cd-fixed-navbar-col-row-2 p')
    profileBg.classList.add('addBg')
    const profileColor = document.querySelector('.ms-cd-fixed-navbar-col-row-2 p a')
    profileColor.classList.add('addColor')
})

const acceptFriendArray = sessionStorage.getItem('acceptFriends')
const accFriJSON = JSON.parse(acceptFriendArray)
//create new chat when the user clicks on friend request[accept]

let chatUser = ""
for(let i = 0; i < accFriJSON.length; i++){
    chatUser += `
    <div class="chat-messages">
        <a href="chat.html" class="btn">
            <div class="chat-user-img">
                <img src="${accFriJSON[i].userImg}" alt="chat">
            </div>
            <div class="chat-user-mg">
                <p>${accFriJSON[i].userName}</p>
                <p>Good afternoon</p>
            </div>
            <div class="chat-user-info">
                <p>1:00pm</p>
                <p>3</p>
            </div>
        </a>
    </div>
    `
}
document.querySelector('.bc-hf-us').innerHTML = chatUser

const chat = document.querySelectorAll('.chat-messages a')
chat.forEach(function(all){
    all.addEventListener('click', function(e){
        const userArray = sessionStorage.getItem('userArray')
        if(userArray === null || userArray === [] || userArray === '' || userArray === {}){
            const all = e.target.parentElement.parentElement
            userChat.clickUser(all)
        }
    })
})

class userUI{
    clickUser(all){
        const chatProfile = {
            chatName: all.querySelector('.chat-user-mg p:first-child').textContent,
            chatImg: all.querySelector('.chat-user-img img').src
        }
        //save name and profile to sessionstorage
        userChat.saveProfileSS(chatProfile)
    }
    saveProfileSS(chatProfile){
        let saveProfile = getProfileSS()
        saveProfile.push(chatProfile)
        sessionStorage.setItem('userProfile', JSON.stringify(chatProfile))
    }
}
const userChat = new userUI()
//get name and profile from sessionstorage
function getProfileSS(){
    let chatUser;
    let chatUserSS = sessionStorage.getItem('userProfile')
    if(chatUserSS === null){
        chatUser = []
    } else {
        chatUser = JSON.parse(chatUserSS)
    } return chatUser
}