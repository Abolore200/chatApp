document.addEventListener('DOMContentLoaded', function(){
    const profileBg = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p')
    profileBg.classList.add('addBg')
    const profileColor = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p a')
    profileColor.classList.add('addColor')
})
//api yo generate random names and profile pictures
const newFriendAPI = new XMLHttpRequest()
newFriendAPI.open('GET', 'https://randomuser.me/api/?results=4&nat=us&page=3', true)
newFriendAPI.onload = function(){
    if(this.status === 200){
        const all = JSON.parse(this.responseText).results
        let newFriend = ""
        for(let i =0; i < all.length; i++){
            newFriend += `
            <div class="new-friends">
                <div class="friend-img">
                    <img src="${all[i].picture.medium}" />
                </div>
                <div class="friend-detail">
                    <p>${all[i].name.first} ${all[i].name.last}</p>
                    <div class="acc-rem">
                        <button class="acceptBtn">Add Friend</button>
                        <button class="removeBtn">Remove</button>
                    </div>
                </div>
            </div>
            `;
        }
        document.querySelector('.sug-friend').innerHTML = newFriend
   }
}
newFriendAPI.send()

//generate random and profile pictures for friend request
const friendRequestAPI = new XMLHttpRequest()
friendRequestAPI.open('GET', 'https://randomuser.me/api/?results=6&nat=us&page=3', true)
friendRequestAPI.onload = function(){
    if(this.status === 200){
        const all = JSON.parse(this.responseText).results

        let friendRequest = ""
        for(let i =0; i < all.length; i++){
            friendRequest += `
                <div class="req-friends">
                    <div class="friend-img">
                        <img src="${all[i].picture.medium}" />
                    </div>
                    <div class="friend-detail">
                        <p>${all[i].name.first} ${all[i].name.last}</p>
                        <div class="acc-rem">
                            <button class="acceptBtn">Accept</button>
                            <button class="declineBtn">Decline</button>
                        </div>
                    </div>
                </div>
            `;
        }
        document.querySelector('.friend-requests').innerHTML = friendRequest
    }
}
friendRequestAPI.send()
//add/remove friend from suggested friends list
const btn = document.querySelector('.sug-friend')
btn.addEventListener('click', function(e){
    //remove user from friends lists
    if(e.target.classList.contains('removeBtn')){
        const rem = e.target.parentElement.parentElement.parentElement
        rem.remove()
    }
    //add user to friend lists
    if(e.target.classList.contains('acceptBtn')){
        window.location.href = 'user-profile.html'
        const user = e.target.parentElement.parentElement.parentElement
        acceptFriend.addSuggestedFriend(user)
    }
})
//accept/decline friend from friends request list
const acceptBtn = document.querySelector('.friend-requests')
acceptBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('acceptBtn')){
        const addFriend = e.target.parentElement.parentElement.parentElement
        acceptFriend.addRequestedFriend(addFriend)
    }
})

class acceptUI{
    //save [addsuggestedfriend] to session storage
    addSuggestedFriend(user){
        const userArray = {
            userName: user.querySelector('.friend-detail p').textContent,
            userImg: user.querySelector('.friend-img img').src
        }
        //save userArray to session storage
        acceptFriend.saveUserSS(userArray)
    }
        saveUserSS(userArray){
            let user = getUserSS()
            user.push(userArray)
            sessionStorage.setItem('userArray', JSON.stringify(user))
        }

    //save [addRequestedFriend] to session storage
    addRequestedFriend(addFriend){
        const requestedFriend = {
            userName: addFriend.querySelector('.req-friends .friend-detail p').textContent,
            userImg: addFriend.querySelector('.req-friends .friend-img img').src
        }
        acceptFriend.saveRequestedFriendSS(requestedFriend)
    }
        saveRequestedFriendSS(requestedFriend){
            let reqFriend = getAddFriendSS()
            reqFriend.push(requestedFriend)
            sessionStorage.setItem('acceptFriends', JSON.stringify(reqFriend))
        }
}
const acceptFriend = new acceptUI()

//get addSuggestedFriend[userArray] from session storage
function getUserSS(){
    let user;
    let userSS = sessionStorage.getItem('userArray')
    if(userSS === null){
        user = []
    } else {
        user = JSON.parse(userSS)
    } return user
}
//get addRequestedFriend[addFriend] from session storage
function getAddFriendSS(){
    let addFriend;
    let addFriendSS = sessionStorage.getItem('acceptFriends')
    if(addFriendSS === null){
        addFriend = []
    } else {
        addFriend = JSON.parse(addFriendSS)
    } return addFriend
}