let number1 = document.getElementById("one");
let number2 = document.getElementById("two");
let number3 = document.getElementById("three");
let gs = document.getElementById("GoogleSearch");
let is = document.getElementById("ImageSearch");
let as = document.getElementById("AdvancedSearch");
let image = document.getElementById("logo");
let logoplace = document.getElementById("search");
function changeActive(number){
  number3.removeAttribute("aria-current");
  number2.removeAttribute("aria-current");
  number1.removeAttribute("aria-current");
  number1.setAttribute("class", "nav-link");
  number2.setAttribute("class", "nav-link");
  number3.setAttribute("class", "nav-link");
  if (number === 1){
    number1.setAttribute("aria-current", "page");
    number1.setAttribute("class", "nav-link active");
    GoogleSearch();
  }
  if (number === 2){
    number2.setAttribute("aria-current", "page");
    number2.setAttribute("class", "nav-link active");
    GoogleImageSearch();
  }
  if (number === 3){
    number3.setAttribute("aria-current", "page");
    number3.setAttribute("class", "nav-link active");
    GoogleAdvancedSearch();
  }
};

function GoogleSearch(){
  search.style.marginTop = "180px";
  image.style.display = "block";
  as.style.display = "none";
  is.style.display = "none";
  gs.style.display = "block";
  image.setAttribute("src", "google_logo.svg");
}
function GoogleImageSearch(){
  search.style.marginTop = "180px";
  image.style.display = "block";
  as.style.display = "none";
  gs.style.display = "none";
  is.style.display = "block";
  image.setAttribute("src", "google image.png");
}
function GoogleAdvancedSearch(){
  search.style.marginTop = "0px";
  gs.style.display = "none";
  is.style.display = "none";
  as.style.display = "block";
  image.style.display = "none";
}