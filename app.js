const adviceNo = document.getElementById("advice-no");
const adviceText = document.getElementById("advice");
const diceBtn = document.getElementById("dice");
const adviceUrl = "https://api.adviceslip.com/advice";

const handleDice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(json => {
        //console.log(json);
        //let advice = JSON.parse(json.slip);
        adviceNo.innerHTML = "ADVICE" + " " + "#" + json.slip.id;
        adviceText.innerHTML = '"'+ json.slip.advice + '"';
        console.log(json.slip.advice);
        console.log(json.slip.id);
    })
}

//diceBtn.addEventListener("click", handleDice);