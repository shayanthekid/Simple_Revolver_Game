document.getElementById('shootbtn').addEventListener('click',flipRevolver);



function flipRevolver(){
    let revolverImage = document.getElementById('revolverImage');
    if (revolverImage.src.includes('Revolver.png')) {
        revolverImage.src = './images/Revolver_flipped.png';
    } else {
        revolverImage.src = './images/Revolver.png';
    }

}



  // Example of how to dynamically show/hide images using JavaScript
  function showImage(imageId) {
    document.getElementById(imageId).style.display = 'flex';
}

function hideImage(imageId) {
    document.getElementById(imageId).style.display = 'none';
}

// Example usage
// hideImage('image1');
// showImage('image1');