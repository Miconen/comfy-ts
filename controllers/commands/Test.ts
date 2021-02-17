import {
	Command,
	CommandMessage
} from '@typeit/discord';

export abstract class Test {
	@Command('Test2')
	async test2(command: CommandMessage) {
		command.reply('Test2');
	}
}