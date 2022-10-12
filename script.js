const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }))

//Dynamic Pages

const project = [{
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description2: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    img1: "Snapshoot Portfolio (1).png",
    img2: "Snapshoot Portfolio (1).png",
    technologies: ["Html", "Css", "Javascript"],
    liveDemo: "#",
    sourceCode: "",
    title1: "Tonic",
    title2: "Tonic",
},
{
    description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    description2: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    img1: "Snapshoot Portfolio (3).png",
    img2: "Snapshoot Portfolio (3).png",
    technologies: ["Html", "Css", "Javascript"],
    liveDemo: "#",
    sourceCode: "",
    title1: "Multi-Post Stories",
    title2: "Multi-Post Stories",
},
{
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    description2: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    img1: "Snapshoot Portfolio.png",
    img2: "Snapshoot Portfolio.png",
    technologies: ["Html", "Css", "Javascript"],
    liveDemo: "#",
    sourceCode: "",
    title1: "Facebook 360",
    title2: "Facebook 360",
},
{
    description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    description2: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    img1: "Snapshoot Portfolio (1).png",
    img2: "Snapshoot Portfolio (1).png",
    technologies: ["Html", "Css", "Javascript"],
    liveDemo: "#",
    sourceCode: "",
    title1: "Uber Navigation",
    title2: "Uber Navigation",
}
]

const section = document.querySelector(".works")
const popup = document.querySelector(".popup-window")

project.forEach((projects) => {
    const article = document.createElement('article')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const elements = document.createElement('div')
    const button = document.createElement("button")
    img.src = `${projects.img1}`
    article.classList.add('card1')
    button.classList.add('btn')
    elements.classList.add('elements1')
    button.innerText = 'See Project'

    elements.innerHTML += `
    <h2 class="title">${projects.title1}</h2>
                        <ul class="highlights">
                            <li>CANOPY</li>
                            <li><img class="counter" src="Counter.png" alt="counter"></li>
                            <li>Back End Dev</li>
                            <li><img class="counter" src="Counter.png" alt="counter"></li>
                            <li>2015</li>
                        </ul>
                        <p class="description">${projects.description}</p>
                        <ul class="languages">
                            <li class="stack">${projects.technologies[0]}</li>
                            <li class="stack">${projects.technologies[1]}</li>
                            <li class="stack">${projects.technologies[2]}</li>
                        </ul>
    `
    elements.append(button)
    divImg.append(img)
    article.append(divImg, elements)
    section.append(article)

    button.addEventListener("click", () => {
        popup.style.display = 'flex'
        section.style.filter = 'blur(5px)'
        document.body.style.overflow = 'hidden'
        popup.innerHTML = `
    <div class="popup-header">
                    <h2 class="popup-title">${projects.title1}</h2>
                    <div class="cancel-icon"><img src="./ICONS/cancel-icon.png"></div>
                </div>
                <ul class="popup-highlights">
                    <li>CANOPY</li>
                    <li><img class="counter" src="Counter.png"></li>
                    <li>Back End Dev</li>
                    <li><img class="counter" src="Counter.png"></li>
                    <li>2015</li>
                </ul>
                <img src="${projects.img2}">
                <div class="popup-content">
                    <div class="left-section">
                        <p class="project-descritpion">${projects.description2}</p>
                    </div>
                    <div class="right-section">
                        <ul class="stacks popup">
                            <li class="stack">Html</li>
                            <li class="stack">Css</li>
                            <li class="stack">Javascript</li>
                        </ul>
                        <div class="popup-btns">
                            <a href="${projects.liveDemo}" class="popup-btn" target="_blank">See live <img src="./ICONS/live.png"></a>
                            <a href="#" class="popup-btn" target="_blank">See source<img src="./ICONS/github.png"></a>
                        </div>
                    </div>
                </div>
    `
        const cancel = document.querySelector(".cancel-icon")
        cancel.addEventListener("click", () => {
            popup.style.display = 'none'
            section.style.filter = 'none'
            document.body.style.overflow = 'initial'
        })
    })
})
// const body = document.querySelector("body");





