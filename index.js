let mode = document.getElementById('mode');
let user_score=0
let cpu_score=0
const choices=document.querySelectorAll(".pic")
const msg=document.querySelector("#msg")
const user_score_para=document.querySelector(".user_score")
const cpu_score_para=document.querySelector(".cpu_score")

mode.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        
        mode.innerText = 'dark';
    } else {
       document. body.style.backgroundColor = 'black';
        mode.innerText = 'light';
    }
});
const rand=()=>{
    const option=['rock','paper','scissor']
    const random=Math.floor(Math.random()*3)
    return option[random]

}

const drawgame=()=>{
    msg.innerText="Game is draw 👋"
    msg.style.backgroundColor = 'grey'
}

const showwinner=(user,userchoice,cpu_choice)=>{
    if(user){
        user_score++
        user_score_para.innerText=user_score
        msg.innerText=`${userchoice} beats ${cpu_choice} : you win!🫡`
        msg.style.backgroundColor = 'green'

    }
    else{
        cpu_score++
        cpu_score_para.innerText=cpu_score
        msg.innerText=`${cpu_choice} beats ${userchoice}  :you loose!🥹`
        msg.style.backgroundColor = 'red'
    }

}

const playgame=(userchoice)=>{
    console.log("user choice",userchoice)
    const cpu_choice=rand()
    console.log("cpu choice",cpu_choice)
    if(userchoice===cpu_choice){
       return drawgame()
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=cpu_choice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=cpu_choice==="scissor"?false:true
        }else{
            userwin=cpu_choice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,cpu_choice)
        }

    }

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const choice_id=choice.getAttribute("id")
        // console.log(`${choice_id} was clicked`)
        playgame(choice_id)

    })

})