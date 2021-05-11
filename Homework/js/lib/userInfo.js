export const UserInfos = () => {
    let userInfo = document.querySelector(".user-info");
    let jsonParse = JSON.parse(sessionStorage.getItem("user"))[0]


    console.log("json", jsonParse);

    userInfo.innerHTML += `
        <tr>
            <td><img src="${jsonParse.picture.thumbnail}" alt="thumbnail"></td>
            <td>${jsonParse.name.title} ${jsonParse.name.first} ${jsonParse.name.last}</td>
            <td>${jsonParse.email}</td>
            <td>${jsonParse.phone}</td>
        </tr>
    `

}