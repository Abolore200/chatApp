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
    </div>
    `
    console.log(i);
}
document.querySelector('.bc-hf-us').innerHTML = chatUser