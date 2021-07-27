
/* ----------------------------------------------------------- */
/*  modern javaScript ↓
/* ----------------------------------------------------------- */

"use strict";

//get all svg paths(cities)
const cities = document.querySelectorAll("path");
cities.forEach(city => {

    //get city name
    const text = city.parentElement.querySelector('text');

    city.addEventListener('mouseenter', () => {
        city.style.fill = '#232b2b';
    });
    city.addEventListener('mouseleave', () => {
        city.style.fill = '#a9a9a9';
    });

    city.addEventListener('mouseover', () => {
        city.style.fill = '#a9a9a9';
        // Link:
        // window.location.href = 'https://kk.rks-gov.net/' + text.innerHTML.trim().toLowerCase();


        //alert
        document.getElementById("kamenica").onclick = function () {
            location.href = "Komunat/kamenica.html";
        };
        document.getElementById("gjilani").onclick = function () {
            location.href = "Komunat/gjilani.html";
        };
        document.getElementById("prishtina").onclick = function () {
            location.href = "Komunat/prishtina.html";
        };
        document.getElementById("prizreni").onclick = function () {
            location.href = "Komunat/prizreni.html";
        };
        document.getElementById("gjakova").onclick = function(){
            location.href="Komunat/gjakova.html";
        };
        document.getElementById("ferizaji").onclick = function(){
            location.href="Komunat/ferizaji.html";
        };
        document.getElementById("mitrovica").onclick = function(){
            location.href="Komunat/mitrovica.html";
        };
        document.getElementById("peja").onclick = function(){
            location.href="Komunat/peja.html";
        };
        document.getElementById("rahoveci").onclick = function(){
            location.href="Komunat/rahoveci.html";
        };
        document.getElementById("hoteli1").onclick = function(){
            location.href="hotelet/hoteli1.html";
        };
        document.getElementById("hoteli2").onclick = function(){
            location.href="hotelet/hoteli2.html";
        };
        document.getElementById("hoteli3").onclick = function(){
            location.href="hotelet/hoteli3.html";
        };
        document.getElementById("hoteli4").onclick = function(){
            location.href="hotelet/hoteli4.html";
        };
       
        
        
    });

    /* ----------------------------------------------------------- */
    /*  phone event listeners
    /* ----------------------------------------------------------- */
    city.addEventListener('touchstart', () => {
        city.style.fill = '#232b2b';
    });
    city.addEventListener('touchend', () => {
        city.style.fill = '#a9a9a9';
    });

})


/* ----------------------------------------------------------- */
/*  non-modern javaScript ↓
/* ----------------------------------------------------------- */
// "use strict";

// var cities = document.querySelectorAll("path");
// cities.forEach(function (city) {
//   var text = city.parentElement.querySelector("text");
//   city.addEventListener("mouseenter", function () {
//     city.style.fill = "#32590e";
//     text.style.color = "black";
//   });
//   city.addEventListener("mouseleave", function () {
//     city.style.fill = "#72B626";
//   });
//   city.addEventListener("click", function () {
//     city.style.fill = "#72B626"; // Link:
//     // window.location.href = 'https://kk.rks-gov.net/' + text.innerHTML.trim().toLowerCase();
//     //alert

//     alert(text.innerHTML.trim());
//   });
//   city.addEventListener("touchstart", function () {
//     city.style.fill = "#32590e";
//   });
//   city.addEventListener("touchend", function () {
//     city.style.fill = "#72B626";
//   });
// });