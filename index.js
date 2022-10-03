//auto__text__effect
let index = 0;
function autoText(){
    let div = document.getElementById("text_auto");
    div.innerText = text.slice(0, index);
    index++;
}
setInterval(autoText, 50);

//text__to__speech
let text = "Hi there! my name is Atharv. I am a Front-end Web developer, nice to meet you.";
let utterance = new SpeechSynthesisUtterance(text);
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    speechSynthesis.speak(utterance);
});