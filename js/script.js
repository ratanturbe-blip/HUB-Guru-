function searchProduct() {

let input = document.getElementById("searchBox").value;

if(input==""){
alert("Please enter a product name");
return;
}

window.open("https://www.amazon.in/s?k="+encodeURIComponent(input), "_blank");

}
