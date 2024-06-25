document.getElementById('shootbtn').addEventListener('click',flipRevolver);



function flipRevolver(){
    let revolverImage = document.getElementById('revolverImage');
    if (revolverImage.src.includes('Revolver.png')) {
        revolverImage.src = './images/Revolver_flipped.png';
    } else {
        revolverImage.src = './images/Revolver.png';
    }

}