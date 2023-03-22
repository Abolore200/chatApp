const form = document.querySelector('.ms-cd-fixed-bottom-navbar-col form')
//on click
form.addEventListener('submit', function(e){
    e.preventDefault()
    const textArea = document.querySelector('.ms-cd-fixed-bottom-navbar-col textarea').value
    //every new chat text chat
    const chatLi = document.createElement('li')
    chatLi.textContent = textArea
    //append chat to the message box
    const chatArea = document.querySelector('.chat-messages-hf-nd ul')
    chatArea.appendChild(chatLi)
    form.reset()
})