const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const email = document.querySelector('form input[type="email"]').value
    const password = document.querySelector('form input[type="password"]').value
    if(email ==='' || password === ''){
        formClass.throwError()
    } else {
        window.location.href = 'chat-home.html'
    }
})

class formUI{
    throwError(){
        const error = document.createElement('div')
        error.classList.add('error')
        error.innerHTML = `
            <p> fill all inputs </p>
        `;
        const errorBefore = document.querySelector('.input-jd-er-gs')
        errorBefore.style.marginTop = '0px'
        form.insertBefore(error, errorBefore)
        setTimeout(function(){
            error.remove()
            errorBefore.style.removeProperty('margin-top', '30px')
        },2000)
    }
}
const formClass = new formUI()