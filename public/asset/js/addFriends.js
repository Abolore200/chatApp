document.addEventListener('DOMContentLoaded', function(){
    const profileBg = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p')
    profileBg.classList.add('addBg')
    const profileColor = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p a')
    profileColor.classList.add('addColor')
})
//api yo generate random names and profile pictures
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://randomuser.me/api/?results=2&nat=us', true)
xhr.onload = function(){
    if(this.status === 200){
        const all = JSON.parse(this.responseText).results
        //generate random name for the friend lists
        document.querySelector('.friend-one .friend-detail p').innerHTML = `${all[0].name.first} ${all[0].name.last}`
        document.querySelector('.friend-two .friend-detail p').innerHTML = `${all[1].name.first} ${all[1].name.last}`

        //generate random profile pictures for the friend list
        document.querySelector('.friend-one .friend-img').innerHTML = `<img src="${all[0].picture.medium}" />`
        document.querySelector('.friend-two .friend-img').innerHTML = `<img src="${all[1].picture.medium}" />`
    }
}
xhr.send()