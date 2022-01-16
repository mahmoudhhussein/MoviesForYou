// Select Landing Page Element
let landingPage = document.querySelector("header");

// Get Array Of Imgs 
let imgsArray = ["1052327.jpg","parker.jfif"];


setInterval(function () {
    // Get Random Number 
    let randomNumber = Math.floor(Math.random() * imgsArray.length); 
    
    // Change Background Image Url 
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] +'")';
        
    },10000)