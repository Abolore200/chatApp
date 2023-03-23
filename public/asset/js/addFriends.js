document.addEventListener('DOMContentLoaded', function(){
    const profileBg = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p')
    profileBg.classList.add('addBg')
    const profileColor = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p a')
    profileColor.classList.add('addColor')
})

const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://randomuser.me/api/?results=2&nat=us', true)
xhr.onload = function(){
    if(this.status === 200){
        const all = JSON.parse(this.responseText).results
        let names = ""
        for(let i = 0; i < all.length; i++){
            // names += `${all[i].name.first} ${all[i].name.last}`
            let nam;

            // console.log(nam.first);
            const nameOne = document.querySelector('.friend-one .friend-detail p')
            const nameTwo = document.querySelector('.friend-two .friend-detail p')
            
            const arrays = [nameOne, nameTwo]
            arrays.forEach(function(name,index){
                nam = all[i].name.first + ' ' + all[i].name.last
                name.innerHTML = nam[index]
            })
        }
        // console.log(names);
    }
}
xhr.send()