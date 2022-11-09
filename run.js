function write(string) {
    process.stdout.write(string);

}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.white.bgBlue('CHALK'));

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let color= (i*j).toString()
        write(chalk.ansi256(color)(color.padEnd(4,' ')));
    }
    write('\n');
}

write(boxen(chalk.blue.bgGreen('Hello chalk'), {

    
    
    
    padding: 2,
    margin: 1
}));

write(boxen(chalk.blue.bgGreenBright('Hello chalk'), {

    padding: 1,
    margin: 3,
    borderStyle: 'classic'

}));

write(boxen(chalk.blue.bgRedBright('Hello chalk'), {
    padding: 1,
    margin: 1,
}));

write(boxen(chalk.blue.bgBlackBright('Hello chalk'), {
   
    padding: 1,
    margin: 5,
    borderStyle: 'double'
  
}));

write(boxen(chalk.blue.bgBlackBright('Hello chalk'), {
    padding: 1,
    margin: 8,
    borderStyle: 'doubleSingle'
}));

write(boxen(chalk.blue.bgGreen('Hello chalk'), {
    padding: 1,
    margin: 1,
    borderStyle: 'bold',
    
}));