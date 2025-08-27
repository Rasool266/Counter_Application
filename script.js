let counterElement = document.getElementById("count")
function onIncrement() {
    // let count = parseInt(document.getElementById("count").innerText);
    // count++;
    // document.getElementById("count").innerText = count;

    let count = counterElement.textContent;
    let updatedCount = parseInt(count) + 1;
    counterElement.textContent = updatedCount;
    
    if (updatedCount > 0) {
        counterElement.style.color = "green";
    }
    else if (updatedCount < 0 ){
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }
}

function onDecrement() {
    // let count = parseInt(document.getElementById("count").innerText);
    // count--;
    // document.getElementById("count").innerText = count;

    let count = counterElement.textContent;
    let updatedCount = parseInt(count) - 1;
    counterElement.textContent = updatedCount; 

    if (updatedCount > 0) {
        counterElement.style.color = "green";
    }
    else if (updatedCount < 0 ) {
        counterElement.style.color = "red";

    }
    else {
        counterElement.style.color = "black";
    }
}




function onReset() {
    // document.getElementById("count").innerText = 0;

    counterElement.textContent = 0;
    counterElement.style.color = "black";
}
