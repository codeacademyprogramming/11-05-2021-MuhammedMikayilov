export const Logout = (el) =>{
    el.addEventListener("click", (e)=> {
        e.preventDefault();
        let dateNow = new Date(new Date().getTime() - 1000 * 60 * 60 * 24)
        let cookie = `token=supersecuretoken; expires = ${dateNow.toUTCString()};`
        document.cookie = cookie;
        login.classList.remove("d-none")
        loader.classList.add("d-none")
        setTimeout(()=>{
            login.classList.remove("d-none")
            loader.classList.add("d-none")
            table.classList.add("d-none")
            }, 1500)
        sessionStorage.removeItem("user")
    })
}