let score = 0;

const question1Input = prompt (` What is the fastest animal? :
[1] sloth
[2] panda
[3] cheetah

`)

const question1Answer = Number(question1Input);

if (Number.isNaN(question1Input)){
    alert("You must enter a number.");
} else if (question1Answer < 1 || question1Answer > 3)
    alert("Your number must be 1, 2, or 3."); {
} else if (question1Answer !== 3) {
    alert( "That's incorrect.");
} else if {
    alert ("That's correct!");
    score >= 1
} 

const question2Input = prompt (` What is the biggest sea animal? :
[1] sealion
[2] whale
[3] shark

`)

const question2Answer = Number(question2Input);

if (Number.isNaN(question2Input)){
    alert("You must enter a number.");
} else if (question2Answer < 1 || question2Answer > 3)
    alert("Your number must be 1, 2, or 3."); {
} else if (question2Answer !== 2) {
    alert( "That's incorrect.");
} else if {
    alert ("That's correct!");
    score >= 2
} 

const question2Input = prompt (` What is the tallest animal? :
[1] horse
[2] giraffe
[3] moose

`)

const question3Answer = Number(question3Input);

if (Number.isNaN(question3Input)){
    alert("You must enter a number.");
} else if (question3Answer < 1 || question3Answer > 3)
    alert("Your number must be 1, 2, or 3."); {
} else if (question3Answer !== 2) {
    alert( "That's incorrect.");
} else if {
    alert ("That's correct!");
    score >= 3
} 

const question4Input = prompt (` Which animal is the heaviest? :
[1] elephant
[2] pony
[3] cat

`)

const question4Answer = Number(question4Input);

if (Number.isNaN(question4Input)){
    alert("You must enter a number.");
} else if (question4Answer < 1 || question4Answer > 3)
    alert("Your number must be 1, 2, or 3."); {
} else if (question4Answer !== 1) {
    alert( "That's incorrect.");
} else if {
    alert ("That's correct!");
    score >= 4
} 


if (score === 4 ) {
    alert ("All answers were incorrect");
} else if ( score === 1) {
    alert ("So Close! Try again.")
} else if ( score === 2) {
    alert ("Half your answers were correct! Try again.")
} else if ( score === 3) {
    alert ( "Almost there! Try again.")
} else if (score === 4) {
    alert ("All answers were correct!")
}