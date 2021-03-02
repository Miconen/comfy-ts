import { Square } from './Square';
import { Rook } from './pieces/Rook';
import { Knight } from './pieces/Knight';
import { Bishop } from './pieces/Bishop';
import { Queen } from './pieces/Queen';
import { King } from './pieces/King';
import { Pawn } from './pieces/Pawn';

export class Board {
	private startingPositions: String[];
	private notations: String[];

	constructor() {
		this.startingPositions = [
			'BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR',
			'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP',
			'', '', '', '', '', '', '', '',
			'', '', '', '', '', '', '', '',
			'', '', '', '', '', '', '', '',
			'', '', '', '', '', '', '', '',
			'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP',
			'WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR'
		]

		this.notations = [
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

	public initializeBoard() {
		var gameBoard: Object[] = new Array();
		let isWhite: boolean;

		this.startingPositions.forEach((element, index) => {
			if (element[0] == 'B') isWhite = false;
			if (element[0] == 'W') isWhite = true;
			else return;

			switch (element[1]) {
				case 'R':
					gameBoard[index] = new Square(0, 0, new Rook(isWhite));
					break;
				case 'N':
					gameBoard[index] = new Square(0, 0, new Knight(isWhite));
					break;
				case 'B':
					gameBoard[index] = new Square(0, 0, new Bishop(isWhite));
					break;
				case 'Q':
					gameBoard[index] = new Square(0, 0, new Queen(isWhite));
					break;
				case 'K':
					gameBoard[index] = new Square(0, 0, new King(isWhite));
					break;
				case 'P':
					gameBoard[index] = new Square(0, 0, new Pawn(isWhite));
					break;
			}
		});

		return gameBoard;
	}

}