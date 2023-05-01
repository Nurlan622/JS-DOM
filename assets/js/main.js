function displayText() {
    var text = document.getElementById("inputText").value;
    var color = document.getElementById("colorSelect").value;
    var display = document.getElementById("displayArea");
    display.innerHTML = text;
    display.style.color = color;
}