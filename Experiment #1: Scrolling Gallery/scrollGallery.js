
document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("gallery-container");

    // List of image files
    const imageFiles = [
        "vac%20rake.png",
        "TR%20logo%20replacement.png",
        "SlickRock%20Shale%20STEP%20v5.png",
        "slickrock.png",
        "stage%20and%20audience.jpg",
        "swirly%20things.jpg",
        "makerarm%20base2.png",
        "minigolf1.jpg",
        "painted%20dome%202.png",
        "painted%20dome.png",
        "projector%20room.png",
        "screen%20and%20chair.png",
        "Setup%20Render%20v2.png",
        "helmet.jpg",
        "Insect%20and%20Octo%20Table%20v3.png",
        "fotek.png",
        "fabric%20render.jpg",
        "dome%20display.png",
        "ebay%20logo%20voxel%20latest%20rendering.jpg",
        "Dealership%20v1.png",
        "dealership.png",
        "banana%20and%20glass"
    ];

    // Path to the images folder
    const imagePath = "Experiment%20#1:%20Scrolling%20Gallery/images/";

    // Dynamically add images to the gallery
    imageFiles.forEach(file => {
        const imgElement = document.createElement("img");
        imgElement.src = imagePath + file;
        imgElement.alt = file;
        galleryContainer.appendChild(imgElement);
    });
});
