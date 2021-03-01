import { Board } from "./Board";
import { Piece } from "./Piece";
import { Player } from "./Player";
import { King } from './pieces/King';

export class Game extends Board {
	private positions: Object[];
	private playerTurn: String;

	constructor(playerOne: Player, playerTwo: Player) {
		super();
		this.positions = this.initializeBoard();
		this.playerTurn = this.chooseFirstMove();
	}

	public testMethod(): void {
		let test = new King(true)
		console.log(test);
	}

	public chooseFirstMove() {
		return Math.random() < 0.5 ? "White" : "Black";
	}

}