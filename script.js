// function epicButtonClicked() {
//     alert("You clicked the epic button!")
// }



// window.addEventListener("DOMContentLoaded", function() {
//     const epicButton = document.getElementById("epic-button");
//     epicButton.addEventListener("click", epicButtonClicked)
// })

// Paper Form Logic
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.querySelector('form');

    form.addEventListener("submit", function (event) {
        // Stop the form from refreshing the page
        event.preventDefault();

        // Get the value from the radio button
        // let selectedPaper = "None Selected";
        // if (document.getElementById('paper-towel').checked) {
        //     selectedPaper = "Paper Towel";
        // } else if (document.getElementById('toilet-paper').checked) {
        //     selectedPaper = "Toilet Paper";
        // } else if (document.getElementById('tissue-paper').checked) {
        //     selectedPaper = "Tissue Paper";
        // }

        const selectedInput = document.querySelector('input[name="paper"]:checked');

        if (!selectedInput) {
            alert("Please select a paper type!");
            return;
        }

        // let selectedPaper = selectedInput ? selectedInput.value : "None Selected";
        // console.log(selectedPaper);

        // Get the value from the range slider
        const paperContentValue = document.getElementById('paper-content').value;

        // Log the values
        const message = `Selected Paper: ${selectedInput.value}, Paper Content: ${paperContentValue}`;
        console.log(message);

        // Print the output
        const output = document.getElementById('output');
        output.innerHTML = message;
    })
})