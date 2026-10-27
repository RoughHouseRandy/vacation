document.getElementById('vacation-form').onsubmit = () => {
    let isValid = true;

    clearErrors();

    let destination = document.getElementById("destination").value;
    let traveler = Number(document.getElementById("travelers").value);
    if(destination === "none"){
        document.getElementById("destination-err").style.display = "block";
        isValid = false;
    }

    if(traveler <= 0){
        document.getElementById("traveler-err").style.display = "block";
        isValid = false;
    }

    return isValid;

}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(let i = 0; i < errors.length; i++){
        errors[i].style.display = "none";
    }
}