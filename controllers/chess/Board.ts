import { Piece } from './Piece';

export class Board {

	private startingPositions = String[];
	private positions = Object[];
	private notation = String[];

	constructor(startingPositions: string[]) {

		this.startingPositions = startingPositions;

		this.notation = [
			'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
			'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
			'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
			'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
			'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
			'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
			'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
			'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'
		];

	}

	convertNotation(input: number) {
		return this.notation[input];
	}

	generatePieces() {
		for (let index = 0; index < this.startingPositions.length; index++) {
			let position: string = '';
			let type: string = '';
			let notation: string = '';
			let side: string = '';

			if (this.startingPositions[index] === '') {
				this.positions[index] = {};
				continue;
			};

			position = this.convertNotation(index);

			switch (this.startingPositions[index][1]) {
				case 'R':
					type = 'Rook';
					notation = 'R';
					break;

				case 'N':
					type = 'Knight';
					notation = 'N';
					break;

				case 'B':
					type = 'Bishop';
					notation = 'B';
					break;

				case 'Q':
					type = 'Queen';
					notation = 'Q';
					break;

				case 'K':
					type = 'King';
					notation = 'K';
					break;

				case 'P':
					type = 'Pawn';
					notation = 'P';
					break;

				default:
					break;
			}

			if (this.startingPositions[index][0] === 'B') side = 'black';
			if (this.startingPositions[index][0] === 'W') side = 'white';

			this.positions = new Piece(position, type, notation, side);
		}
	}

}