document.getElementById('shootbtn').addEventListener('click',flipRevolver);



function flipRevolver(){
    let revolverImage = document.getElementById('revolverImage');
    if (revolverImage.src.includes('Revolver.png')) {
        revolverImage.src = './images/Revolver_flipped.png';
    } else {
        revolverImage.src = './images/Revolver.png';
    }

}



/*
Function to render the bullets dynamically
*/

function renderBullets(numBullets) {
    const bulletContainer = document.getElementById('bulletContainer');
    bulletContainer.innerHTML = ''; // Clear any existing bullets

    //Limit of bullets is 6
    for (let i = 0; i < Math.min(numBullets, 6); i++) {
        const bulletDiv = document.createElement('div');
        bulletDiv.className = 'flex justify-center items-center';

        const bulletImg = document.createElement('img');
        bulletImg.src = './images/Bullet.png';
        bulletImg.alt = `Image ${i + 1}`;
        bulletImg.className = 'w-1/4';

        bulletDiv.appendChild(bulletImg);
        bulletContainer.appendChild(bulletDiv);
    }
}

// Example usage:
// Displays number of bullets
renderBullets(6); 