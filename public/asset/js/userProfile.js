document.addEventListener('DOMContentLoaded', function(){
    const profileBg = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p')
    profileBg.classList.add('addBg')
    const profileColor = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p a')
    profileColor.classList.add('addColor')
})
//add userArray name and picture to user profile from session storage
const getUser = sessionStorage.getItem('userArray')
let js = JSON.parse(getUser)
js.forEach(function(user){
    //userArray name
    document.querySelector('.user-name-mf-ks p span').innerHTML = `${user.userName}`
    document.querySelector('.ud-ms-md p').innerHTML = `${user.userName}`

    //userArray image
    let userImage = ""
    userImage += ` <img src="${user.userImg}" /> `;
    document.querySelector('.user-img-gd-nc-hs').innerHTML = userImage
})

//remove [userName]
setTimeout(function(){
    document.querySelector('.user-name-mf-ks').remove()
},2000)


const clearUserArray = document.querySelector('.df-vb-he-gr')
clearUserArray.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('fa-arrow-left')){
        if(window.location.href = 'add-friends.html'){
            sessionStorage.removeItem('userArray')
        }
    }
})

const clickMessage = document.querySelector('.hd-sj-nc-sb')
clickMessage.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('message')){
        window.location.href = 'chat.html'
    }
})