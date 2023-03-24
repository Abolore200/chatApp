const form = document.querySelector('.ms-cd-fixed-bottom-navbar-col form')
//on click, send text
form.addEventListener('submit', function(e){
    e.preventDefault()
    const textArea = document.querySelector('.ms-cd-fixed-bottom-navbar-col textarea').value
    if(textArea.length === ''){
        form[SubmitEvent] = false
    }
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
js.forEach(function(user){
    //add name to chat user
    document.querySelector('.ndd-hjd-nxmd .pro-fullname p:first-child').innerHTML = `${user.userName}`
    //add picture to chat user
    let userImage = ""
    userImage += `<img src="${user.userImg}" />`
    document.querySelector('.pro-img').innerHTML = userImage
    //if user profile[name] is more than 13 letter, change font size
    const names = user.userName
    if(names.length > 13){
        document.querySelector('.ndd-hjd-nxmd .pro-fullname p:first-child').style.fontSize = '18px'
    }
})

const backBtn = document.querySelector('.back-btn')
backBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('fa-arrow-left')){
        if(window.location.href = 'chat-home.html'){
            sessionStorage.removeItem('userArray')
        }
    }
})
