function Navbar(){
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
    <p>More &#8595;  </p> 
    <input id="search" type="search" placeholder="Search" name="search"> 
    <img id="searchIcon" src="https://as1.ftcdn.net/v2/jpg/03/25/73/68/1000_F_325736897_lyouuiCkWI59SZAPGPLZ5OWQjw2Gw4qY.jpg">`
    return div
}
export default Navbar