function searchProduct() {
    const input = document.getElementById("searchBox");

    if (!input || input.value.trim() === "") {
        alert("Please enter a product name.");
        return;
    }

    window.open(
        "https://www.amazon.in/s?k=" + encodeURIComponent(input.value),
        "_blank"
    );
}
