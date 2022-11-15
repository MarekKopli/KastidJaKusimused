import inquirer from 'inquirer';
inquirer
    .prompt([
{type: 'input', name: 'input',message: 'How old are you?'},
{type: 'number', name: 'number',message: '2+8'},
{type: 'confirm', name: 'confirm',message: 'Do you like pizza?'},
{type: 'list', name: 'list',message: 'what is your favorite season?', choices: ['winter', 'spring', 'summer', 'autumn']},
{type: 'checkbox', name: 'checkbox',message: 'What animals do You like?', choices:['cats','lions','elephants','dogs']}, 
{type:'password', name:'password', message:'What is your password?'},
{type:'editor', name:'editor', message:'Enter a description'},
{type:'expand', name:'expand', message:'kits(k) või lammas(l)', choices:[{key:'k',value:'kits'}, {key:'l',value:'lammas',},],},

])


.then((answer)=> {
    console.log(' I am ' + answer.input + ' years old');
    console.log(' 2+8 is ' + answer.number );
    console.log(' My favorite food is pizza - ' + answer.confirm );
    console.log(' My favorite season is ' + answer.list );
    console.log(' You like ' + answer.checkbox );
    console.log(' Your password is ' + answer.password);
    console.log( 'you wrote '+  answer.editor);
    console.log('kits või lammas? ' + answer.expand);
})
