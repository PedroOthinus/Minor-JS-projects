const loadingDiv = document.querySelector('.loading');
const backgroundDiv = document.querySelector('.background');

let load = 0;
let loadIncrease = setInterval(unBlurring, 20);

const bgLoadingScale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
};

function unBlurring() {
    load++

    if (load > 99) {
        clearInterval(loadIncrease);
    }

    loadingDiv.innerText = `${load}%`;
    loadingDiv.style.opacity = bgLoadingScale(load, 0, 100, 1, 0)
    backgroundDiv.style.filter = `blur(${bgLoadingScale(load, 0, 100, 20, 0)}px)`
}