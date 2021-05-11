export const Login = ()=> {
    let form = document.querySelector(".form")
    let email = document.querySelector("#email")
    let pass = document.querySelector("#pass")
    let user = {
        username: "adminUser",
        password: "123456",
        email: "admin@code.az"
    }
    let currentUser = {
        username: "",
        email: ""
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if(email.value === user.email && password.value === user.password){
            let dateNow = new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
            let cookie = `token=supersecuretoken; expires = ${dateNow.toUTCString()};`
            document.cookie = cookie;
            login.classList.add("d-none")
            loader.classList.remove("d-none")
            currentUser.username = user.username;
            currentUser.email = user.email;
            setTimeout(()=>{
                login.classList.add("d-none")
                loader.classList.add("d-none")
                table.classList.remove("d-none")
              }, 1500)
            //   window.location.reload()

        }
        else{
            console.log(false);
        }
    })


}