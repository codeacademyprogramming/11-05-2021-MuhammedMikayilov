export const userAsync = async () => {
    let url = "https://randomuser.me/api/";
    let fetched = await fetch(url)
    let user = await fetched.json()

    sessionStorage.setItem("user", JSON.stringify(user.results))
    console.log("user: ", user);
}


