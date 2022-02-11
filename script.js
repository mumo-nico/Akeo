$(document).ready(function(){
    $('.header').height($(window).height());
})

let ready = (callback) => {
    if(document.readyState != "loading") callback();
    else document.addEventListener("DOMContentrLoaded", callback);
}

ready(() => {
    document.querySelector(".header").getElementsByClassName.height = window.innerHeight + "px";
})