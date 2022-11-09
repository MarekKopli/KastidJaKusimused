import inquirer from 'inquirer';
inquirer
    .prompt([
{type: 'input', name: 'age',message: 'How old are you?'},
{type: 'input', name: 'how',message: 'How are you?'},
{type: 'input', name: 'food',message: 'What is your favorite food?'},
{type: 'input', name: 'height',message: 'How tall are you?'},        
])


.then((answer)=> {
    console.log(' I am ' + answer.age + ' years old');
    console.log(' I am ' + answer.how + '');
    console.log(' My favorite food is ' + answer.food + '');
    console.log(' I am ' + answer.height + ' centimeters tall ');
})

