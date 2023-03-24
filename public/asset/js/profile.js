document.addEventListener('DOMContentLoaded', function(){
    const profileBg = document.querySelector('.ms-cd-fixed-navbar-col-row-3 p')
    profileBg.classList.add('addBg')
    const profileColor = document.querySelector('.ms-cd-fixed-navbar-col-row-3 p a')
    profileColor.classList.add('addColor')
})
//add email from session storage to profile email
const profileEmail = document.querySelector('.profile-name-gd-nc-te .pro-fullname p:last-child')
const getEmail = sessionStorage.getItem('email')
profileEmail.innerHTML = getEmail
//
const logOutBtn = document.querySelector('.ul-list-jg-kf-dj ul li:last-child a')
logOutBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(window.location.href = 'welcome.html'){
        sessionStorage.clear()
    }
})