let finishGameEnergie = 1

let priceGrade = [5, 5, 5];
let itemsPrice = 1;

let botUpdate = 1;

let upgradeBtn = document.querySelectorAll('.upgradeEl');

upgradeBtn.forEach(element => {
    element.addEventListener('click', (event) => {
        if (event.target.id == 'up1') {
            if ((parseInt(score.innerHTML) - priceGrade[0]) >= 0) {
                document.querySelector('#txt1 strong').innerHTML = parseInt(document.querySelector('#txt1 strong').innerHTML)+1
                score.innerHTML = parseInt(score.innerHTML)-priceGrade[0]
                priceGrade[0] *= 2;
                document.querySelector('#'+event.target.id+" p").innerHTML = priceGrade[0]
                itemsPrice += 1;
            }
        }
        else if (event.target.id == 'up2') {
            if ((parseInt(score.innerHTML) - priceGrade[1]) >= 0 && finishGameEnergie < 100) {
                document.querySelector('#txt2 strong').innerHTML = parseInt(document.querySelector('#txt2 strong').innerHTML)+1
                score.innerHTML = parseInt(score.innerHTML)-priceGrade[1]
                priceGrade[1] *= 2
                document.querySelector('#'+event.target.id+" p").innerHTML = priceGrade[1]
                finishGameEnergie += 1;
                document.querySelector('#finishGame strong').innerHTML = parseInt(document.querySelector('#finishGame strong').innerHTML) + 1
            }
        }
        else if (event.target.id == 'up3') {
            if ((parseInt(score.innerHTML) - priceGrade[2]) >= 0) {
                document.querySelector('#txt3 strong').innerHTML = parseInt(document.querySelector('#txt3 strong').innerHTML)+1
                score.innerHTML = parseInt(score.innerHTML)-priceGrade[2]
                priceGrade[2] *= 2
                document.querySelector('#'+event.target.id+" p").innerHTML = priceGrade[2]
                botUpdate += 1;
            }
        }
        else {
            alert("You have finish the Game :DDD !!!")
        }
    })
});


let items = document.getElementById("items");

function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function updateBot() {
    score.innerHTML = parseInt(score.innerHTML)+botUpdate
}

setInterval(updateBot, 3000);


let score = document.querySelector("#text h2");
let img = document.getElementById("items");

img.addEventListener('click', (event) => {
    let x = Random(2, 90);
    let y = Random(2, 90);
    img.style.top = y+"%";
    img.style.left = x+"%";
    if (img.src == "file:///home/winstonwolf007/Prog/htmlCss/cookieGame/sprite_3.png") {
        score.innerHTML = parseInt(score.innerHTML)+finishGameEnergie
    }
    let cookieStyle = "sprite_"+Random(0, 3)+".png";
    img.src = cookieStyle;
    score.innerHTML = parseInt(score.innerHTML)+itemsPrice  
})
