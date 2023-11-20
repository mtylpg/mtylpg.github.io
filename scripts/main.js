console.log('This would be the main JS file.');


stars = document.getElementById("stars");
starCanvas = document.getElementsByClassName("h1")[0].getBoundingClientRect();
starArray = [];
initial_minStars = 15;
initial_spawnRate = 500;
initial_waveRate = 2000;


if (starCanvas.width<1000)
{
    minStars = initial_minStars/3;
    spawnRate = initial_spawnRate*2;
    waveRate = initial_waveRate*2;

} else {
    minStars = initial_minStars;
    spawnRate = initial_spawnRate;
    waveRate = initial_waveRate;
}


console.log(stars);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
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
    lastRandom = false;
    lastSpawn = 0
    nextSpawn = 0;
    for (let i = 0; i < count; i++) {
        if (lastRandom){
            nextSpawn = spawnRate - lastSpawn;
            lastRandom = false;
        } else{
            nextSpawn = getRandomInt(0,spawnRate)+500;
            lastRandom = true;
        }
        // console.log(starArray);
        if (starArray.length > minStars)
        {
            starArray[0].parentNode.removeChild(starArray[0]);
            starArray.shift();
            starArray[0].parentNode.removeChild(starArray[0]);
            starArray.shift();
        }
        setTimeout(function(){
            spawnStar (
                getRandomInt(starCanvas.left+30,starCanvas.left+starCanvas.width-30),getRandomInt(starCanvas.top-80, starCanvas.top+starCanvas.height-100),getRandomInt(0,180))
        }, nextSpawn);
        lastSpawn = nextSpawn;
        console.log(lastSpawn);
    }
}

spawnStars(4, spawnRate);
setInterval(function() {spawnStars(4, spawnRate)}, waveRate);

addEventListener("resize", (event) => {
    starCanvas = document.getElementsByClassName("h1")[0].getBoundingClientRect();
    if (starCanvas.width<1000)
    {
        minStars = initial_minStars/2;
    } else {
        minStars = initial_minStars;
    }
});
