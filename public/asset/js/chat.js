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