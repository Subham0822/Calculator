let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

const gradients = [
    'linear-gradient(45deg, #450800, #472a26)',
    'linear-gradient(45deg, #0a0d0d, #014544)',
    'linear-gradient(45deg, #241e3d, #0e0145)',
    'linear-gradient(45deg, #370142, #3c1b42)',
    'linear-gradient(45deg, #0a0a0a, #3a4452)'
];

document.body.style.background = gradients[Math.floor(Math.random() * gradients.length)];
