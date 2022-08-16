const quizDB=[
    {
        question: "Q1: What is your favourite strategy?",
        a: "You stay away from conflicts",
        b: "You insist on the conflict",
        c: "You try to understand what the fight is about",
        d: "You try to resolve the fight",
        gryf: "ans4",
        huff: "ans3",
        rav: "ans1",
        slyth: "ans2"
    },
    {
        question: "Q2: What do you do in the war?",
        a: "You promise to fight for the good",
        b: "You resolve to destroy the evil",
        c: "You promise to protect the good",
        d: "You want to instill peace before the war takes place",
        gryf: "ans1",
        huff: "ans3",
        rav: "ans4",
        slyth: "ans2"
    },
    {
        question: "Q3: What do you buy if you get a gift of Rupees 50000?",
        a: "Games/Movie tickets/OTT subscriptions",
        b: "New notebooks, stationaries and books",
        c: "Snacks and gifts for kith and kin",
        d: "Save the money",
        gryf: "ans1",
        huff: "ans3",
        rav: "ans2",
        slyth: "ans4"
    },
    {
        question: "Q4: What is your favourite subject?",
        a: "Art",
        b: "Athletics/Games",
        c: "History",
        d: "Math",
        gryf: "ans2",
        huff: "ans1",
        rav: "ans4",
        slyth: "ans3"
    },
    {
        question: "Q5: You are...",
        a: "Friendly",
        b: "Confident",
        c: "Energetic",
        d: "Thoughtful",
        gryf: "ans3",
        huff: "ans1",
        rav: "ans4",
        slyth: "ans2"
    },
    {
        question: "Q6: You chose/choose...",
        a: "Engineering",
        b: "Medicine",
        c: "Language/Art",
        d: "Business",
        gryf: "ans2",
        huff: "ans3",
        rav: "ans1",
        slyth: "ans4"
    },
    {
        question: "Q7: You...",
        a: "Want things right",
        b: "Do things right",
        c: "Think things right",
        d: "Know things right",
        gryf: "ans2",
        huff: "ans3",
        rav: "ans4",
        slyth: "ans1"
    }
];
const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll('.answer');
const showHouse =document.querySelector('#showHouse');
var hoggy=[0,0,0,0];
var names=["Gryffindor","Hufflepuff","Ravenclaw","Slytherin"]

let questionCount=0, gryfs=0,huffs=0,ravs=0,slyths=0;
const loadQuestion=() => {
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAns)=>{
        if (curAns.checked){
            answer=curAns.id;
        }
    });
    return answer;
}

const deselectAll =()=> {
    answers.forEach((curAns)=> curAns.checked=false);
}
const getHouse=()=>{
    let house;
    var highest=Math.max.apply(Math,hoggy);
    var indexed=hoggy.indexOf(highest);
    house=names[indexed];
    return house;
    console.log(house)
}

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer); 
    if (checkedAnswer==quizDB[questionCount].gryf){
        hoggy[0]++;
    }
    else if (checkedAnswer==quizDB[questionCount].huff){
        hoggy[1]++;
    }
    else if (checkedAnswer==quizDB[questionCount].rav){
        hoggy[2]++;
    }
    else{
        hoggy[3]++;
    }
    questionCount++;
    deselectAll();
    if (questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        const houseAsAnswer=getHouse();
        console.log(houseAsAnswer); 
        showHouse.innerHTML=`
        <h3>You are sorted into:- ${houseAsAnswer}</h3>
        <button class="btn" onclick="location.reload()">Take Quiz Again</button>
        `;
        showHouse.classList.remove('nameArea');
    }
});
