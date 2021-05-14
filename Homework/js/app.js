import {Table} from "./lib/table.js";
import {Login} from "./lib/login.js";
import {Logout} from "./lib/logout.js";
import {userAsync} from "./lib/sessionStorage.js";

let table = document.querySelector("#table")
let login = document.querySelector("#login")
let loader = document.querySelector("#loader")
let info = document.querySelector("#info")
let logout = document.querySelector("#logout")


if(!localStorage.getItem("lang")){
  localStorage.setItem("lang", JSON.stringify({"lang":"EN","theme":"Dark"}))
}
userAsync()

Logout(logout)
Login();
console.log("cookie: ", document.cookie);
if(document.cookie){
  table.classList.remove("d-none")
  login.classList.add("d-none")
  Table()
  
}
else{
  table.classList.add("d-none")
  login.classList.remove("d-none")
  Table()
}