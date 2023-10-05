let nav=document.querySelector("nav")

document.addEventListener("scroll",function (){
    if(document.documentElement.scrollTop > 0){
        nav.classList.remove('h-16','lg:h-20')
        nav.classList.add('h-14','lg:h-[60px]')
    }
    else{
        nav.classList.add('h-16','lg:h-20')
        nav.classList.remove('h-14','lg:h-[60px]')
    }
})


let light = document.getElementById("light")

let lightC = false

let html = document.querySelector("html")

light.addEventListener("click", function () {
    if (!lightC) {
        makeDark()
    }
    else {
        makeLight()
    }

})

let theme = localStorage.getItem("theme")

if (theme != null) {
    if (theme == "dark") {
        makeDark()
    } else {
        makeLight()
    }
}


function makeDark() {
    light.classList.remove("fa-moon")
    light.classList.add("fa-sun")
    html.classList.add("dark")
    localStorage.setItem("theme", "dark")
    lightC = true
}

function makeLight() {
    light.classList.remove("fa-sun")
    light.classList.add("fa-moon")
    html.classList.remove("dark")
    localStorage.setItem("theme", "light")
    lightC = false
}