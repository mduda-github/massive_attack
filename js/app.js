document.addEventListener("DOMContentLoaded", function() {

    var board = document.querySelector(".plansza");
    var points = document.querySelector(".points");
    var missed = document.querySelector(".missed");

    var score = 0;
    var counter = 0;

    timer = setInterval(function () {
        var zombie = document.createElement("div");
        zombie.classList.add("zombie");

        //losujemy liczbę z przediału 0 - do horyzont
        //trzeba elementowi dodać elem.style.bottom = losowaliczba + px
        // var randomNum = Math.floor(Math.random()*(360-0+1)+0);

        var randomNum = Math.floor(Math.random()*(360-0+1)+0);

        zombie.style.bottom = randomNum + "px";

        if (randomNum > 0 && randomNum < 80) {
            zombie.style.transform= "scale(1.3)";
        }

        if (randomNum > 80 && randomNum < 160) {
            zombie.style.transform= "scale(1.0)";
        }

        if (randomNum > 160 && randomNum < 200) {
            zombie.style.transform= "scale(0.8)";
        }

        if (randomNum > 200 && randomNum < 310) {
            zombie.style.transform= "scale(0.5)";
        }
        // tutaj if że jeśli bottom > 300 to ustaw elementowi scale (0.3)

        zombie.style.zIndex = 360 - randomNum;

        var randomNum2 = Math.floor(Math.random()*(20-5+1)+5);

        zombie.style.animationDuration = "0.5s," + randomNum2 + "s";

        board.appendChild(zombie);

        zombie.addEventListener("animationend", function(event) {
            console.log(event);
            this.remove();
            counter++;
            missed.innerText = counter;

        });

        zombie.addEventListener("click", function() {
            zombie.parentElement.removeChild(zombie);
            score++;
            points.innerText = score;
        });





    }, 1000);





});