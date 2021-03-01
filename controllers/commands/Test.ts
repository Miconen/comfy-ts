import {
	Command,
	CommandMessage
} from '@typeit/discord';

import { Game } from '../chess/Game';
import { Player } from '../chess/Player';

let test1 = new Player('test123');
let test2 = new Player('test321');

export abstract class Test {
	@Command('testPositions')
	async testPositions(command: CommandMessage) {
		var test = new Game(test1, test2);
		console.log(test);
	}
}