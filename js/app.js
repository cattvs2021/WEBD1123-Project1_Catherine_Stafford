let addToHead = document.querySelector("head");
let cssLink = document.createElement("link");
addToHead.appendChild(cssLink);
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("href", "css/style.css");
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
let bodY = document.querySelector("body");
bodY.appendChild(wrapper);
let i = 0
for (let i = 0; i < 4; i++) {
    let divs = document.createElement("div");
    wrapper.appendChild(divs);
    divs.classList.add("wrapperDivs");
}
