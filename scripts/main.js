console.log('This would be the main JS file.');


stars = document.getElementById("stars");
starCanvas = document.getElementsByClassName("stars-container")[0];
starCanvasArea = starCanvas.getBoundingClientRect();
headerContainer = document.getElementsByClassName("line-offset")[0];

starArray = [];
initial_maxstars = 6;
initial_spawnRate = 1500;
initial_waveRate = 5000;

if (starCanvasArea.width<1000)
{
    maxStars = initial_maxstars/3;
    spawnRate = initial_spawnRate*2;
    waveRate = initial_waveRate*2;

} else {
    maxStars = initial_maxstars;
    spawnRate = initial_spawnRate;
    waveRate = initial_waveRate;
}


console.log(stars);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random()+.01) * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }  

function spawnStar(x, y, rotation) {
    let star_container = document.createElement('span')
    star_container.classList.add("star-container");

    star_container.setAttribute("style", "top:"+y+"px; left:"+x+"px; rotate:"+rotation+"deg;");

    star_wipe_container = star_container.cloneNode(true);

    let img = document.createElement('img');
    img.classList.add("star-animation");

    img2 = img.cloneNode(true);
    img2.classList.add("wipe");

    img.src = '../images/textures/star-blue.svg';
    img2.src = '../images/textures/star-white.svg';
    
    star_container.appendChild(img);
    star_wipe_container.appendChild(img2);

    stars.appendChild(star_container);
    stars.appendChild(star_wipe_container);
    starArray.push(star_container, star_wipe_container);
}

function spawnStars(count, spawnRate) {
    return;
    lastRandom = false;
    lastSpawn = 0
    nextSpawn = 0;
    for (let i = 0; i < count; i++) {
        if (lastRandom){
            nextSpawn = spawnRate - lastSpawn;
            lastRandom = false;
        } else{
            nextSpawn = 500;
            lastRandom = true;
        }
        // console.log(starArray);
        if (starArray.length > maxStars)
        {
            starArray[0].parentNode.removeChild(starArray[0]);
            starArray.shift();
            starArray[0].parentNode.removeChild(starArray[0]);
            starArray.shift();
        }
        setTimeout(function(){
            spawnStar (
                getRandomInt(starCanvasArea.left+400,starCanvasArea.left+starCanvasArea.width-400),getRandomInt(starCanvasArea.top-80, starCanvasArea.top+starCanvasArea.height-400),getRandomInt(0,180))
        }, 1000);
        lastSpawn = nextSpawn;
    }
}

spawnStars(1, 1);
setInterval(function() {spawnStars(1, spawnRate)}, 2000);

addEventListener("resize", (event) => {
    console.log(starCanvasArea);
    if (starCanvasArea.width<1000)
    {
        maxStars = initial_maxStars/2;
    } else {
        maxStars = initial_maxStars;
    }
    // document.getElementsByClassName("bg-purple")[0].style.top=headerContainer.getBoundingClientRect().y + headerContainer.getBoundingClientRect().height + 160+"px";bg-purple-content
});

let hasScrolled = false;



if(window.scrollY!=0){
    hasScrolled = true;
    // document.getElementsByClassName("bg-purple")[0].style.top=headerContainer.getBoundingClientRect().y + headerContainer.getBoundingClientRect().height + 160+"px";
    document.getElementsByClassName("intro-blurb")[0].classList.add("intro-blurb--visible");
    

}

else{
    document.addEventListener("scroll", (event) => {
        if (!hasScrolled) {
            hasScrolled = true;
            // document.getElementsByClassName("bg-purple")[0].style.top=headerContainer.getBoundingClientRect().y + headerContainer.getBoundingClientRect().height + 160+"px";
            document.getElementsByClassName("intro-blurb")[0].classList.add("intro-blurb--visible");
        }
    });
}