let deltaImages = ["../images/delta1.gif","../images/delta2.jpg","../images/delta3.jpg","../images/delta4.jpg","../images/delta5.jpg"];

const DELTAIMG = document.getElementById("deltaImg");

let randomIndex = Math.floor(Math.random() * deltaImages.length);

DELTAIMG.src = deltaImages[randomIndex];