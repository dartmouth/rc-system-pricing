function epicButtonClicked() {
    alert("You clicked the epic button!")
}



window.addEventListener("DOMContentLoaded", function() {
    const epicButton = document.getElementById("epic-button");
    epicButton.addEventListener("click", epicButtonClicked)
})