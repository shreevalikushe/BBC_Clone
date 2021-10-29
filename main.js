function Navbar() {
    let div = document.createElement("div")
    div.id = "navbar"
    div.innerHTML = `<img class="logo" src="https://logos-download.com/wp-content/uploads/2016/06/BBC_logo_black_background.png">
    <img class="signInLogo" src="https://as2.ftcdn.net/v2/jpg/00/65/77/27/500_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg">
    <p class="signIn">Sign in</p>
    <p>Home</p>
    <p>News</p>
    <p>Sport</p>
    <p>Reel</p>
    <p>Worklife</p>
    <p>Travel</p>
    <p>Future</p>
    <p>Culture</p>
    <p>More &#8964;  </p> 
    <input id="search" type="search" placeholder="Search" name="search"> 
    <img id="searchIcon" src="https://as1.ftcdn.net/v2/jpg/03/25/73/68/1000_F_325736897_lyouuiCkWI59SZAPGPLZ5OWQjw2Gw4qY.jpg">`
    return div
}
export const fetchData = async ({ category = "general", pageSize = 25 }, page = 1) => {
    return fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=65de7cf43ee34250a7fad72afaea85d5&category=${category}&page=${page}&pageSize=${pageSize}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            return res.articles
        })
}


export const showData = async (data, container) => {
    // console.log(container)
    let cont = document.getElementById(container)
    cont.innerHTML = null;
    let div = document.createElement("div")
    div.className = "innerDiv"
    if (container === "container_1") {
        for (let news of data) {
            let newsArticle = await main(news)
            div.append(newsArticle)
        }
    }
    else if(container === "reel_content"){
        for (let news of data) {
            let newsArticle = await reelData(news)
            div.append(newsArticle)
        }
    }
    else {
        for (let news of data) {
            let newsArticle = await handleNews(news)
            div.append(newsArticle)
        }
    }

    cont.append(div)
}
const main = async (data) => {
    let box = document.createElement("div")
    box.className = "boxes";
    box.style.backgroundImage = `url(${data.urlToImage})`
    let h4 = document.createElement("h4")
    h4.textContent = `${data.title}`
    h4.style.fontSize = "16px"
    let publishDate = document.createElement("p")
    publishDate.textContent = `Published At: ${data.publishedAt}`
    box.append(h4, publishDate)
    return box
}
const handleNews = async (data) => {
    let box = document.createElement("div")
    box.className = "section";

    let img = document.createElement("img")
    img.src = `${data.urlToImage}`

    let h5 = document.createElement("h5")
    h5.textContent = `${data.title}`
    h5.style.padding = "0px";
    h5.style.margin = "0px";
    h5.style.fontSize = "16px"
    let h6 = document.createElement("h6");
    h6.style.fontSize = "14px";
    h6.style.padding = "0px";
    h6.style.margin = "0px";
    h6.style.marginTop = "5px"
    h6.style.color = "red"
    h6.textContent = `${data.author}`
    if (data.author === null) {
        h6.textContent = "Siddhesh Shamla"
    }
    let publishDate = document.createElement("p")
    publishDate.textContent = `Published At: ${data.publishedAt}`
    box.append(img, h5, h6, publishDate)
    return box
}
const reelData = async(data)=>{
    let box = document.createElement("div");
    box.className = "reel";

    let img = document.createElement("img");
    img.src = `${data.urlToImage}`;

    let h5 = document.createElement("h5");
    h5.textContent = `${data.title}`
    h5.style.padding = "0px";
    h5.style.margin = "0px";
    h5.style.fontSize = "16px";

    box.append(img,h5)
    return box



}
export const weather = async ({ query = "Pune" }) => {
    // http://api.weatherstack.com/current?access_key=881365cb8cd266e52b9bc179c3ee104b&query=New%20York
    return fetch(`http://api.weatherstack.com/current?access_key=881365cb8cd266e52b9bc179c3ee104b&query=${query}`)
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response)
            return response
        });
}
export const weatherShow = async(data,container)=>{
    let cont = document.getElementById(container)
    cont.innerHTML = null
    let location = document.createElement("h6")
    location.style.padding = "0px";
    location.style.margin = "0px"
    location.textContent = `${data.location.name},${data.location.region},${data.location.country}`
    location.style.fontSize = "18px";

    let img = document.createElement("img")
    img.src = `${data.current.weather_icons}`
    img.style.alignContent = "center"

    let info = document.createElement("p")
    info.textContent = `Cloudcover:${data.current.cloudcover} | Humidity: ${data.current.humidity} | Temp: ${data.current.temperature} | Observation Time: ${data.current.observation_time}`
    cont.append(location,img,info)
}

export default Navbar