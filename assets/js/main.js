
const iconToggleMobile = document.getElementById("toggleMobile")
const closeMobileNavs = [].slice.call(document.getElementsByClassName("mobile-close"))


const toggleNav = ()=>{
    const mobileNav = document.getElementsByClassName("mobile")[0]
    if(!mobileNav.classList.contains("none")){
        mobileNav.classList.toggle("close")
        setTimeout(()=>{
            mobileNav.classList.toggle("none")
            mobileNav.classList.toggle("close")
            document.body.style.overflow = ""
        },2000)
    }else{
        mobileNav.classList.toggle("none")
        document.body.style.overflow = "hidden"
    }
}

iconToggleMobile.addEventListener("click", toggleNav)

closeMobileNavs.forEach(item => {
    item.addEventListener("click", toggleNav)
});

