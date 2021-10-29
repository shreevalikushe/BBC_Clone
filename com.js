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
 let fetchData =  ({ category = "general", pageSize = 25 , page = 1 }) => {
   return fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e36b5c825d4e4a27b3b262445a398ffd&category=${category}&page=${page}&pageSize=${pageSize}`)
        .then(function(res){
        return res.json()
    })
    .then(function(res){
      // console.log(res.articles)
      return res.articles
    })
    .catch(function(error){

    })
}
 const loadData = async (data, container) => {
    console.log(container)
    let cont = document.getElementById(container)
    cont.innerHTML = null;
    let div = document.createElement("div")
   // div.className = "innerDiv"
    if (container === "top") {
        for (let news of data) {
            let newsArticle = await handleTop(news)
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

/*async function loadData(data,container){
    console.log(container);
    let cont = document.getElementById(container);
    cont.innerHTML = null;
    let div = document.createElement("div")
   for(let news of data){
      let newsArticle =  await handleNews(news)
     // console.log(box)
      div.append(newsArticle)
   }
   cont.append(div);

}
*/
const handleTop = (data)=>{
    let box = document.createElement("div");
    box.className = "top_div";
    let img = document.createElement("img");
    img.className = "img_box_top";
    img.src = `${data.urlToImage}`;
    let div1 = document.createElement("div");
    let p = document.createElement("h3");
    p.textContent = `${data.title}`;
    let description = document.createElement("p");
    description.textContent = `${data.description}`;
    
    div1.append(p,description)
    box.append(img,div1);
    return box;

}
const handleNews = (data) =>{
   // console.log(data);
    let box = document.createElement('div');
    box.className = "boxes";
    let img = document.createElement("img");
    img.className = "img_box";
    img.src = `${data.urlToImage}`;
    let p = document.createElement("h3");
    p.textContent = `${data.title}`;
    

    box.append(img,p)
    return box;

}

export {Navbar,fetchData,loadData,handleNews}