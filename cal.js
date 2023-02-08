

let string = "";

let buttons = document.querySelectorAll('.button');
// function delete1() {
//     currentOperation.textContent.slice(0, -1)
// }
// const deleteButton = document.querySelectorAll('[data-delete]')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        // else if(e.target.innerHTML=='D')  {
        //     deleteButton.addEventListener('click', delete1);
        //      document.querySelector('input').value = string;
       // }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})