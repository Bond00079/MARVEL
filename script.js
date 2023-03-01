let dropdown = document.querySelector(".dropdown");
function myFunction() {
    dropdown.classList.toggle("dropdown_open");
}

function hidden() {
    var x = document.getElementById("bio");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function america() {
    hidden();
    document.querySelector(".capt").classList.toggle("captain_america");
}

function iron()
{
    hidden();
    document.querySelector(".ironMan").classList.toggle("iron_man");
}

function widow()
{
    hidden();
    document.querySelector(".blackWidow").classList.toggle("black_widow");
}
function dr()
{
    hidden();
    document.querySelector(".drStrange").classList.toggle("dr_strange");
}

function spider()
{
    hidden();
    document.querySelector(".spiderMan").classList.toggle("spider_man");
}

function star()
{
    hidden();
    document.querySelector(".starLord").classList.toggle("star_lord");
}

function groot()
{
    hidden();
    document.querySelector(".grootMan").classList.toggle("groot_man");
}