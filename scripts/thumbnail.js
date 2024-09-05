// Toggle the first image (Voxel OX Render)
document.getElementById("thumbnail-1").addEventListener("click", function() {
    var fullsizeImg1 = document.getElementById("fullsize-1");
    fullsizeImg1.style.display = fullsizeImg1.style.display === "none" ? "block" : "none"; // Toggle visibility
});

// Toggle the second image (Assembled Voxel OX)
document.getElementById("thumbnail-2").addEventListener("click", function() {
    var fullsizeImg2 = document.getElementById("fullsize-2");
    fullsizeImg2.style.display = fullsizeImg2.style.display === "none" ? "block" : "none"; // Toggle visibility
});
