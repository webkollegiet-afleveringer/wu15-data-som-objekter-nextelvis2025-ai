// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))




const heroFig = document.querySelector(".hero");
heroFig.classList.add("hero-section");

heroFig.innerHTML = `
    <div class="hero__content">
        <img class="hero__icon" src="${hero.icon}" alt="">
        <h1 class="hero__headline">${hero.headline}</h1>
        <p class="hero__copy">${hero.copy}</p>
    </div>
    <div class="hero__media">
        <img class="hero__image" src="${hero.image}" alt="">
    </div>
`;





const servicesFig = document.querySelector(".services");
servicesFig.classList.add("services-section");

servicesFig.innerHTML = `
    <div class="services__list">
        ${services.map(service => `
            <article class="service-card">
                <img class="service-card__image" src="${service.illustration}" alt="">
                <h3 class="service-card__headline">${service.headline}</h3>
                <p class="service-card__copy">${service.text}</p>
                <a class="service-card__link" href="#">${service.linktext}</a>
            </article>
        `).join("")}
    </div>
`;





const facilitiesFig = document.querySelector(".facilities");
facilitiesFig.classList.add("facilities-section");

facilitiesFig.innerHTML = `
    <h2 class="facilities__headline">${facilities.headline}</h2>
    <div class="facilities__list">
        ${facilities.options.map(option => `
            <article class="facility-card">
                <img class="facility-card__icon" src="${option.icon}" alt="">
                <h3 class="facility-card__headline">${option.headline}</h3>
                <p class="facility-card__copy">${option.text}</p>
            </article>
        `).join("")}
    </div>
`;








const sitesFig = document.querySelector(".sites");
sitesFig.classList.add("sites-section");

sitesFig.innerHTML = `
    <div class="sites__intro">
        <h2 class="sites__headline">${sites.headline}</h2>
        <p class="sites__text">${sites.text}</p>
        <button class="sites__button">
            Start <img src="${sites.btnicon}" alt="">
        </button>
    </div>

    <div class="sites__list">
        ${sites.places.map(site => `
            <article class="site-card">
                <img class="site-card__image" src="${site.img}" alt="">
                <h3 class="site-card__headline">${site.name}</h3>
                <p class="site-card__city">${site.city}</p>
            </article>
        `).join("")}
    </div>
`;







const advantagesFig = document.querySelector(".advantages");
advantagesFig.classList.add("advantages-section");

advantagesFig.innerHTML = `
    <div class="advantages__list">
        ${advantages.map(item => `
            <article class="advantage-card">
                <img class="advantage-card__icon" src="${item.icon}" alt="">
                <h3 class="advantage-card__headline">${item.headline}</h3>
                <p class="advantage-card__copy">${item.text}</p>
            </article>
        `).join("")}
    </div>
`;









const footerFig = document.querySelector(".footer");

footerFig.innerHTML = footer.map(advan => `
    <div class="advan">
        <h1 class="footer-headline">${advan.headline}</h1>
        <p class="footer-copy">${advan.text}</p>
    </div>
`).join("");