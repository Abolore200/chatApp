document.addEventListener('DOMContentLoaded', function(){
    const profileBg = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p')
    profileBg.classList.add('addBg')
    const profileColor = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p a')
    profileColor.classList.add('addColor')
})
//api yo generate random names and profile pictures
const newFriendAPI = new XMLHttpRequest()
newFriendAPI.open('GET', 'https://randomuser.me/api/?results=4&nat=us', true)
newFriendAPI.onload = function(){
    if(this.status === 200){
        const all = JSON.parse(this.responseText).results
        //generate random name for the friend lists
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
                        <button>Add Friend</button>
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

const friendRequestAPI = new XMLHttpRequest()
friendRequestAPI.open('GET', 'https://randomuser.me/api/?results=6&nat=us', true)
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
                            <button>Accept</button>
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

// const btn = document.querySelector('.friend-one')
// btn.addEventListener('click', function(e){
//     if(e.target.classList.contains('removeBtn')){
//         const rem = e.target.parentElement.parentElement.parentElement
//         rem.remove()
//     }
// })