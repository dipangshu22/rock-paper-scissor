let mode = document.getElementById('mode');
let user_score=0
let cpu_score=0
const choices=document.querySelectorAll(".pic")

mode.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        
        mode.innerText = 'dark';
    } else {
        document.body.style.backgroundColor = 'black';
        mode.innerText = 'light';
    }
});

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const choice_id=choice.getAttribute("id")
        console.log(`${choice_id} was clicked`)
    })

})