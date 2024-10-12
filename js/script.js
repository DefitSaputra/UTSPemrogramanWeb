function toggleDetails(lanjutan, btn1) {
    var details = document.getElementById(lanjutan);
    var button = document.getElementById(btn1);

    if (details.style.display === "none" || details.style.display === "") {
        // Show the hidden content
        details.style.display = "block";
        button.innerHTML = "Sembunyikan";
        button.classList.add("active");
    } else {
        // Hide the content
        details.style.display = "none";
        button.innerHTML = "Pelajari Lebih Lanjut";
        button.classList.remove("active");
    }
}
