const heading = document.getElementById('main-heading');
const paragragh = document.getElementById('main-paragragh');
const changeButton = document.getElementById('change-button');
const resetButton = document.getElementById('reset-button');

function change(){
    alert('Click to change text')
}


    function myFunction(){
           const body = document.getElementById("reset-button");

         body.addEventListener("click", () => {
            
            const anyColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = anyColor;
        });
        }