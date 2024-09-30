function animateValue(target, duration,divId) {
    const displayElement = document.getElementById(divId);
    let start = 0;
    const startTime = performance.now();

    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * target);
        
        displayElement.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateValue);
            }
        }

    requestAnimationFrame(updateValue);
}

// Animate value from 0 to 100 over 2 seconds (2000 milliseconds)


function isValidNumber(num){
    return parseInt(num)
}

for(let i=1;i<=4;i++){
    const serviceNum=document.getElementById(`service-detail-value-${i}`).textContent
    animateValue(isValidNumber(serviceNum),3000,`service-detail-value-${i}`)
}








