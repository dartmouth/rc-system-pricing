
const greetningName = 'World';
console.log(greetningName)
console.log('Hello World!');


let grade = 65
if (grade >= 90){
    alert('A!');
}else if (grade >= 80){
    alert('B');
}else if (grade >=70){
    alert('C');
}else {
    alert('You Failed!'); // this will execute if none of the above conditions are met
}


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

let humidity = 65;
if (humidity < 70) {
    isRaining = false
    if (isRaining = false){
        alert('leave your rainjacket at home!');
    }
}

