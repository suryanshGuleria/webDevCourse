const searchForm = document.querySelector("[searchForm]");
const searchInput = document.querySelector("[data-searchInput]");
const profileImage = document.querySelector("[profileImage]")
const userName = document.querySelector("[username]");
const joinDate = document.querySelector("[joinDate]")
const profileLink = document.querySelector("[profileLink]");
const bio = document.querySelector("[bio]");
const reposNum = document.querySelector("[reposNum]");
const followersNum = document.querySelector("[followersNum]");
const followingNum = document.querySelector("[followingNum]");
const twitter = document.querySelector("[twitter]");
const locationInfo = document.querySelector("[location]");
const blogLink = document.querySelector("[blogLink]");
const companyName = document.querySelector("[companyName]");
const colorModeButton = document.querySelector("[colorModeButton]");

// Default Action

let defaultUsername = "suryanshGuleria";
fetchUserInfo(defaultUsername);

// To work on search form and extract text from search field.

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username = searchInput.value;

    if(username === '') return;

    fetchUserInfo(username);
})

async function fetchUserInfo(username){
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    // console.log(data.avatar_url);
    renderData(data);
}

// Render Data to UI
function renderData(userInfo){
    //profile pic
    profileImage.src = userInfo.avatar_url;
    //username
    userName.innerText = userInfo.name;
    //date
    joinDate.innerText = formatDate(userInfo.created_at);
    //profileLink
    profileLink.href = userInfo.html_url;
    profileLink.innerText = `@${userInfo.login}`;
    //bio
    if(userInfo.bio === null){
    bio.innerText = `This Profile has no bio.`;
    }
    else{
    bio.innerText = userInfo.bio;
    }
    //Repo Number
    reposNum.innerText = userInfo.public_repos;
    //Followers Number
    followersNum.innerText = userInfo.followers;
    //Following Number
    followingNum.innerText = userInfo.following;
    //Location 
    if(userInfo.location === null){
        locationInfo.innerText = `Not Available`;
    }
    else{
        locationInfo.innerText = userInfo.location;
    }
    //Twitter
    if(userInfo.twitter_username === null){
        twitter.innerText = `Not Available`;
    }
    else{
        twitter.innerText = userInfo.twitter_username;
    }
    //BlogLink
    if(userInfo.blog === ""){
        blogLink.innerText = `Not Available`;
    }
    else{
        blogLink.innerText = userInfo.blog;
    }
    //CompanyName
    if(userInfo.company === null){
        companyName.innerText = `Not Available`;
    }
    else{
        companyName.innerText = userInfo.company;
    }   
}

// Date Formatter

function formatDate(dateString){
    let date = new Date(dateString);
    
    let formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    let components = formattedDate.split(' ');
    let day = components[1];
    let month = components[0];
    let year = components[2];

    let result = `Joined ${day[0]+day[1]+" " + month + " " + year}`;
    return result;
}


// Related to dark mode.

const colorModeIcon = document.querySelector("[colorModeIcon]");
const colorModeName = document.querySelector("[colorModeName]");
const wrapper = document.querySelector(".wrapper");
const mainHeading = document.querySelector(".header > h1");
const themeSwitchButton = document.querySelector(".theme-switch-button");
const inputStyle = document.querySelector(".inputStyle");
// const inputStylePlaceholder = document.querySelector(".inputStyle::placeholder");
// console.log(inputStylePlaceholder.innerHTML)
const submitButton = document.querySelector(".submit-button");
const profileDisplay = document.querySelector(".profileDisplay");
const profileSectionRight = document.querySelector(".profile-section-right");
const ffrSection = document.querySelector(".followers-following-repos");



colorModeButton.addEventListener("click", ()=>{
    changeColorMode();
})

function changeColorMode(){
    if(colorModeName.innerText === "LIGHT"){
       colorModeName.innerText = "DARK";
       colorModeIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
       renderLightColorMode();
    }
    else{
       colorModeName.innerText = "LIGHT";
       colorModeIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
       renderDarkColorMode();
    }
}

function renderLightColorMode(){
    wrapper.classList.add("light");
    mainHeading.classList.add("light");
    themeSwitchButton.classList.add("light");
    inputStyle.classList.add("light");
    // inputStylePlaceholder.classList.add("light");
    submitButton.classList.add("light");
    profileDisplay.classList.add("light");
    profileSectionRight.classList.add("light");
    ffrSection.classList.add("light");


}

function renderDarkColorMode(){
    wrapper.classList.remove("light");
    mainHeading.classList.remove("light");
    themeSwitchButton.classList.remove("light");
    inputStyle.classList.remove("light");
    // inputStylePlaceholder.classList.remove("light");
    submitButton.classList.remove("light");
    profileDisplay.classList.remove("light");
    profileSectionRight.classList.remove("light");
    ffrSection.classList.remove("light");
}