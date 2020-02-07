var modeEnvironment = true;

function startWebcam() {
    const video = document.getElementById("webcam");
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: {facingMode: (modeEnvironment ? "environment" : "user")}})
        .then(function(stream) {
            // User accepted to use the webcam
            video.srcObject = stream;
        })
        .catch(function(error) {
            // User refused to use the webcam
            console.log("Something went wrong!");
        });
    }
}

function takePicture() {
    const video = document.getElementById("webcam");
    const pictures = document.getElementById("pictures");

    // Get a div with the picture and 2 buttons
    const divPicture = createDivPicture(video);

    // Add the picture to the list
    pictures.prepend(divPicture);
}

function createDivPicture(video) {
    const divPicture = document.createElement("div");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Draw the picture in the canvas
    canvas.className = "picture";
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    ctx.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);

    // Create a div with 2 buttons: delete and show in real size
    const divButtons = document.createElement("div");
    divButtons.className = "divButtons";
    divButtons.appendChild(createButton("img/delete.png", deletePicture, divPicture));
    divButtons.appendChild(createButton("img/realSize.png", realSize, divPicture));

    // Add elements in div
    divPicture.appendChild(canvas);
    divPicture.appendChild(divButtons);

    return divPicture;
}

// Function that create a button with a picture and a callback function for onclick attribute
function createButton(imgSrc, callback, ...args) {
    const button = document.createElement("button");
    button.onclick = function() {callback(...args)};

    const img = document.createElement("img");
    img.className = "buttonPicture";
    img.src = imgSrc;

    button.appendChild(img);
    return button;
}

function rotateCamera() {
    modeEnvironment = !modeEnvironment;
    startWebcam();
}

function deletePicture(picture) {
    const pictures = document.getElementById("pictures");
    pictures.removeChild(picture);
}

function realSize(picture) {
    // Change class of the canvas to put it in real size
    picture.children[0].className = "pictureRealSize";
    picture.children[1].children[1].children[0].src = "img/reduce.jpg";
    picture.children[1].children[1].onclick = function() {reduce(picture)};
}

function reduce(picture) {
    // Change class of the canvas to put it in normal size
    picture.children[0].className = "picture";
    picture.children[1].children[1].children[0].src = "img/realSize.png";
    picture.children[1].children[1].onclick = function() {realSize(picture)};
}
