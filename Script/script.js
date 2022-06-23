
let banner = document.querySelector("#banner");
let table = document.querySelector(".table");
let draggables = document.querySelectorAll("#draggable");
let price = document.querySelector(".price")
let sauces = document.querySelector(".sauces > p")
let topings = document.querySelector(".topings > p")
let radio = document.querySelectorAll(".radioIn")


let sauce = [];
let toping = [];
let sumPrice = 0;
let sizeCost = 0;

    function randomPos(min, max){
        let random = min + Math.random() * ((max - min) * 10);
        return Math.floor(random);
    }

    banner.onmousemove = function() {
        banner.style.transform = "translateX(" + randomPos(0, 100) + "px)" + "translateY(" + randomPos(0, 100) + "px)";
    }

    draggables.forEach((drag) => {
            drag.addEventListener('dragstart', () => {
                if (!drag.classList.contains("dragged")) {
                        drag.setAttribute("draggable", "true");
                        drag.setAttribute("id", "active");
                        drag.style.opacity = .5;
                    
                } else if (drag.classList.contains("dragged")) {
                    alert("Нельзя класть больше одного вида!!")
                }
        })
    });

    document.addEventListener("dragend", (event) => {
        if (event.target && event.target.nodeName == 'IMG') {
            event.target.style.opacity = '';
        }
    })

    table.addEventListener("dragover", (event) => {
        table.style.width = "60%"
        price.style.fontSize = "26px"
        event.preventDefault();
    });

    table.addEventListener("drop", (event) => {

        event = document.querySelector("#active")  
        event.style.opacity = "";
        event.removeAttribute("id");
        event.classList.add("dragged");

        let toppingClone = event.cloneNode(false);
            table.append(toppingClone);

            table.style.width = null;

        let converter = +(event.getAttribute("cost"));
            sumPrice += converter;
    
        if (event.getAttribute("type") === "sauce"){
            sauce.push(event.getAttribute("alt"));
            sauces.innerHTML = "Соуси: " + sauce;
            price.innerHTML = "ЦІНА: " + +(sizeCost + sumPrice) + " грн" 
        } else if (event.getAttribute("type") === "toping"){
            toping.push(event.getAttribute("alt"));
            topings.innerHTML = "Топінги: " + toping;
            price.innerHTML = "ЦІНА: " + +(sizeCost + sumPrice) + " грн"     
            }
        }) 

    radio.forEach((item) => {
        item.addEventListener("change", ()=> {
            if (item.value == "small") {
                sizeCost = 50;
            } else if (item.value == "mid") {
                sizeCost = 75;
            } else {
                sizeCost = 100;
            }
            price.innerHTML = "ЦІНА: " + +(sizeCost + sumPrice) + " грн"
            price.style.fontSize = "26px"
        })
    })

    table.addEventListener("click", (event) => {
        if(event.target.getAttribute("draggable") === "true") {
            event.target.remove();

            let dragged = document.querySelectorAll(".dragged");
                dragged.forEach((item) => {
                   item.classList.remove("dragged") 
                })   
            
            let converter = +(event.target.getAttribute("cost"));

            sauce.forEach(item => {
                if(item === event.target.getAttribute("alt")){
                    sauce.splice(-1, 1)
                    sumPrice -= converter;
                }
            })
            toping.forEach(item => {
                if(item === event.target.getAttribute("alt")){
                   toping.splice(-1, 1)
                   sumPrice -= converter; 
                }
            })
            
            price.innerHTML = "Ціни: " + +(sizeCost + sumPrice) + " грн"
            sauces.innerHTML = "Соуси: " + sauce;
            topings.innerHTML = "Топінги: " + toping;
        }
    })

      


    

    

     

    
    



