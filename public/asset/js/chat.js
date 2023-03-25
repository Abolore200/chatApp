const form = document.querySelector('.ms-cd-fixed-bottom-navbar-col form')
//on click, send text
form.addEventListener('submit', function(e){
    e.preventDefault()
    const textArea = document.querySelector('.ms-cd-fixed-bottom-navbar-col textarea').value
    //every new chat text chat
    const chatLi = document.createElement('div')
    chatLi.innerHTML = `<li>${textArea}</li>`
    //append chat to the message box
    const chatArea = document.querySelector('.chat-messages-hf-nd')
    chatArea.appendChild(chatLi)
    //clear textatrea
    form.reset()
})
//add name and picture to chat user profile from session storage
const getUserArray = sessionStorage.getItem('userArray')
const js = JSON.parse(getUserArray)

if(sessionStorage.getItem('userProfile') === [] || sessionStorage.getItem('userProfile') === null){
    //add name to chat user
    document.querySelector('.ndd-hjd-nxmd .pro-fullname p:first-child').innerHTML = `${js.userName}`
    //add picture to chat user
    let userImages = ""
    userImages += `<img src="${js.userImg}" />`
    document.querySelector('.pro-img').innerHTML = userImages
    //if user profile[name] is more than 13 letter, change font size
    const namess = js.userName
    if(namess.length > 13){
        document.querySelector('.ndd-hjd-nxmd .pro-fullname p:first-child').style.fontSize = '18px'
    }
}

const backBtn = document.querySelector('.back-btn a')
backBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('fa-arrow-left')){
        if(window.location.href = 'chat-home.html'){
            sessionStorage.removeItem('userArray')
            sessionStorage.removeItem('userProfile')
        }
    }
})

const userProfile = sessionStorage.getItem('userProfile')
const userProfileJSON = JSON.parse(userProfile)

if(sessionStorage.getItem('userArray') === [] || sessionStorage.getItem('userArray') === null){
    // add name to chat user
    document.querySelector('.ndd-hjd-nxmd .pro-fullname p:first-child').innerHTML = `${userProfileJSON.chatName}`
    //add picture to chat user
    let userImage = ""
    userImage += `<img src="${userProfileJSON.chatImg}" />`
    document.querySelector('.pro-img').innerHTML = userImage

    //if user profile[name] is more than 13 letter, change font size
    const names = userProfileJSON.chatName
    if(names.length > 13){
        document.querySelector('.ndd-hjd-nxmd .pro-fullname p:first-child').style.fontSize = '18px'
    }
}
// // add name to chat user
// document.querySelector('.ndd-hjd-nxmd .pro-fullname p:first-child').innerHTML = `${userProfileJSON.chatName}`
// //add picture to chat user
// let userImage = ""
// userImage += `<img src="${userProfileJSON.chatImg}" />`
// document.querySelector('.pro-img').innerHTML = userImage

// //if user profile[name] is more than 13 letter, change font size
// const names = userProfileJSON.chatName
// if(names.length > 13){
//     document.querySelector('.ndd-hjd-nxmd .pro-fullname p:first-child').style.fontSize = '18px'
// }