import chalk from 'chalk';
const log = console.log;

log(chalk.blue('Hello') + ' World' + chalk.red('!'));

log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); 

console.log(error('Error!'));
console.log(warning('Warning!'));

