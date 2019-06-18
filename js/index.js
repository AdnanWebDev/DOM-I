const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//Header Part
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll("nav a")
navItems[0].textContent=siteContent["nav"]["nav-item-1"]
navItems[1].textContent=siteContent["nav"]["nav-item-2"]
navItems[2].textContent=siteContent["nav"]["nav-item-3"]
navItems[3].textContent=siteContent["nav"]["nav-item-4"]
navItems[4].textContent=siteContent["nav"]["nav-item-5"]
navItems[5].textContent=siteContent["nav"]["nav-item-6"]

//Setting the color for links to GREEN
navItems.forEach(color => color.style.color = 'green')

//Adding two items via prepend and appendChild
let navSelect = document.querySelector('nav')
let stuff = document.createElement('a')
let extras = document.createElement('a')
stuff.textContent="Home"
extras.textContent="Extras"
navSelect.prepend(stuff)
stuff.style.color = "green"
navSelect.appendChild(extras)
extras.style.color = "green"


//section CTA

let ctaText = document.querySelector(".cta-text > h1")
ctaText.innerHTML=siteContent["cta"]["h1"]

let button = document.querySelector(".cta-text > button")
button.textContent=siteContent["cta"]["button"]


let midPic = document.getElementById("cta-img")
midPic.setAttribute('src', siteContent["cta"]["img-src"])

//Main-Content 

let topContent = document.querySelectorAll(".top-content > .text-content h4")

topContent[0].textContent=siteContent["main-content"]["features-h4"]
topContent[1].textContent=siteContent["main-content"]["about-h4"]

let topContentText = document.querySelectorAll(".top-content > .text-content p")

topContentText[0].textContent=siteContent["main-content"]["features-content"]
topContentText[1].textContent=siteContent["main-content"]["about-content"]

let mainContentPic = document.getElementById("middle-img")
mainContentPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomContent = document.querySelectorAll(".bottom-content > .text-content h4")
bottomContent[0].textContent=siteContent["main-content"]["services-h4"]
bottomContent[1].textContent=siteContent["main-content"]["product-h4"]
bottomContent[2].textContent=siteContent["main-content"]["services-h4"]

let bottomContentText = document.querySelectorAll(".bottom-content > .text-content p")
bottomContentText[0].textContent=siteContent["main-content"]["services-content"]
bottomContentText[1].textContent=siteContent["main-content"]["product-content"]
bottomContentText[2].textContent=siteContent["main-content"]["services-content"]

let contact = document.querySelectorAll(".contact h4")
contact[0].textContent=siteContent["contact"]["contact-h4"]

let contactDetails = document.querySelectorAll(".contact p")
contactDetails[0].innerHTML=siteContent["contact"]["address"]
contactDetails[1].textContent=siteContent["contact"]["phone"]
contactDetails[2].textContent=siteContent["contact"]["email"]

let footer =document.querySelectorAll("footer p")

footer[0].textContent = siteContent["footer"]["copyright"]