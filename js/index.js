// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))




const heroFig = document.querySelector(".hero");

heroFig.innerHTML =
    `<img class="hero-image" src="${hero.image}" alt="Woman">
        <img class="hero-icon" src="${hero.icon}" alt="Icon">
        <h1 class="hero-headline">${hero.headline}</h1>
        <p class="hero-copy">${hero.copy}</p>
    </div>
`;




const servicesFig = document.querySelector(".services");

servicesFig.innerHTML = services.map(service => `
    <div class="service">
        <img class="services-image" src="${service.illustration}" alt="">
        <h1 class="services-headline">${service.headline}</h1>
        <p class="services-copy">${service.text}</p>
        <a class="services-linktext" href="#">${service.linktext}</a>
    </div>
`).join("");




const facilitiesFig = document.querySelector(".facilities");

facilitiesFig.innerHTML = facilities.options.map(facilitie => `
    <div class="facilitie">
        <img class="facilities-image" src="${facilitie.icon}" alt="bob">
        <h1 class="facilities-headline">${facilitie.headline}</h1>
        <p class="facilities-copy">${facilitie.text}</p>
        
    </div>
`).join("");







const sitesFig = document.querySelector(".sites");

sitesFig.innerHTML = sites.places.map(site => `
    <div class="site">
        <img class="sites-image" src="${site.img}" alt="Bob3">
        <h1 class="sites-headline">${site.name}</h1>
        <p class="sites-copy">${site.city}</p>
    </div>
`).join("");






const advantagesFig = document.querySelector(".advantages");

advantagesFig.innerHTML = advantages.map(advan => `
    <div class="advan">
        <img class="advantages-image" src="${advan.icon}" alt="">
        <h1 class="advantages-headline">${advan.headline}</h1>
        <p class="advantages-copy">${advan.text}</p>
    </div>
`).join("");








const footerFig = document.querySelector(".footer");

footerFig.innerHTML = footer.map(advan => `
    <div class="advan">
        <h1 class="footer-headline">${advan.headline}</h1>
        <p class="footer-copy">${advan.text}</p>
    </div>
`).join("");