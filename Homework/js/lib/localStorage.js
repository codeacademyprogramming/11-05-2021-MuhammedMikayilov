export const setLocalStorage = (el)=> {
    let t_head = document.querySelectorAll("[data-key]")
    let langs = [
        {
            lang: "AZ",
            theme: "Light"
        },
        {
            lang: "EN",
            theme: "Dark"
        }
    ];
    let sessionParse = JSON.parse(sessionStorage.getItem("user"))
    console.log(sessionParse);

    let languageArr = [
        {
            image: "Şəkil",
            firstname: "Ad",
            lastname: "Soyad",
            salary: "Maaş",
            loan: "Aktiv kredit",
            total: "Aylıq kredit ödənişi",
            apply: "Yeni kreditə icazə",
            detail: "Detal",
            loaner: "Kredit verən",
            amount: "Məbləğ",
            period: "Müddət",
            isActive: "Aktivdir mi?",
            monthly: "Aylıq",
            dueAmount: "Qalıq",
            start: "Başlanma və bitmə vaxtı",
            filter: "Aktiv krediti olanları görsət!",
            detailBtn: "Ətraflı bax",
            logoutBtn: "Çıxış et",
            searchBtn: "Axtarış",
            userImg: "Istifadəçi şəkli" ,
            fullname: "Tam ad",
            email_user: "Istifadəçi emaili",
            phone: "Telefon",
            gender: "Cins"
        },
        {
            image: "Image",
            firstname: "Firstname",
            lastname: "Lastname",
            salary: "Salary",
            loan: "Active Loan",
            total: "Total monthly pay at the moment",
            apply: "Is apply for loan?",
            detail: "Detail",
            loaner: "Loaner",
            amount: "Amount",
            period: "Period",
            isActive: "Is active loan",
            monthly: "Monthly",
            dueAmount: "Due amount",
            start: "Start and end dates",
            filter: "Filter by active loan status",
            detailBtn: "Show Detail",
            logoutBtn: "Log out",
            searchBtn: "Search",
            userImg: "User Image" ,
            fullname: "Fullname",
            email_user: "User email",
            phone: "Phone",
            gender: "Gender"
        }
    ]

    console.log(el);


    const changeLang = ()=> {
        if(!localStorage.getItem("lang")){
            localStorage.setItem("lang", JSON.stringify(langs[1]))
        }

        // if(JSON.parse(localStorage.getItem("lang")).lang === "AZ"){
        //     document.querySelector("#search").setAttribute("placeholder", "Ada görə axtarış")
        //   }
        //   else if(JSON.parse(localStorage.getItem("lang")).lang === "EN") {
        //     document.querySelector("#search").setAttribute("placeholder", "Search for name")
        //   }

        t_head.forEach(item=>{
            let dataKey = item.getAttribute("data-key")
            let jParse = JSON.parse(localStorage.getItem("lang")).lang
            switch(jParse){
                case "AZ":
                    item.innerText =  languageArr[0][dataKey]
                    break;
                case "EN": 
                    item.innerText =  languageArr[1][dataKey]
                    break;
                default: 
                    break;
            }
        })
    }

    changeLang()

    el.forEach(item=> {
        if(!item.classList.contains("active")){
            let jsonLocal = JSON.parse(localStorage.getItem("lang")).lang;
            if(item.innerText === jsonLocal){
                item.classList.add("active")
            }
        }
        item.addEventListener("click", ()=> {
            
            localStorage.removeItem("lang")
            console.log("item", item);            
            if(item.innerText === "AZ"){
                localStorage.setItem("lang", JSON.stringify(langs[0]))
                changeLang()
            }
            else{
                localStorage.setItem("lang", JSON.stringify(langs[1]))
                changeLang()
            }

            if(document.querySelector(".nav-item .active")?.classList.contains("active")){
                document.querySelector(".nav-item .active")?.classList.remove("active");
            }
            
        })
    })
  }
