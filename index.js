let image1 = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png)";
let image2 = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png)";

let bgEl=document.getElementById('bg')
let inputEl=document.getElementById('input');
let headingEl=document.getElementById('heading')

function changeTheme(event){
    if (event.key==="Enter"){
        let userInput=inputEl.value;
        if(userInput==="Light"){
            bgEl.style.backgroundImage=image1
            headingEl.style.color="#014dd0"
            inputEl.value=""
        }
        else if(userInput==="Dark"){
            bgEl.style.backgroundImage=image2
            headingEl.style.color="#ffffff"
            inputEl.value=""
        }
        else{
            alert("Enter Valid Theme")
        }
    }
}

inputEl.addEventListener('keydown',changeTheme);