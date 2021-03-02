import { Square } from './Square';
import { Rook } from './pieces/Rook';
import { Knight } from './pieces/Knight';
import { Bishop } from './pieces/Bishop';
import { Queen } from './pieces/Queen';
import { King } from './pieces/King';
import { Pawn } from './pieces/Pawn';

export class Board {
	private startingPositions: String[];
	// private notations: String[];
	private squares: Square[][];

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

		// this.notations = [
		// 	'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
		// 	'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
		// 	'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
		// 	'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
		// 	'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
		// 	'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
		// 	'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
		// 	'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'
		// ];

		this.setBoard();

	}

	public setBoard(): void {
		//        File  Rank
		this.squares[0][0] = new Square(0, 0, new Rook(true));
		this.squares[0][1] = new Square(0, 1, new Knight(true));
		this.squares[0][2] = new Square(0, 2, new Bishop(true));
		this.squares[0][3] = new Square(0, 3, new Queen(true));
		this.squares[0][4] = new Square(0, 4, new King(true));
		this.squares[0][5] = new Square(0, 5, new Bishop(true));
		this.squares[0][6] = new Square(0, 6, new Knight(true));
		this.squares[0][7] = new Square(0, 7, new Rook(true));

		this.squares[1][0] = new Square(1, 0, new Pawn(true));
		this.squares[1][1] = new Square(1, 1, new Pawn(true));
		this.squares[1][2] = new Square(1, 2, new Pawn(true));
		this.squares[1][3] = new Square(1, 3, new Pawn(true));
		this.squares[1][4] = new Square(1, 4, new Pawn(true));
		this.squares[1][5] = new Square(1, 5, new Pawn(true));
		this.squares[1][6] = new Square(1, 6, new Pawn(true));
		this.squares[1][7] = new Square(1, 7, new Pawn(true));

		this.squares[6][0] = new Square(6, 0, new Pawn(false));
		this.squares[6][1] = new Square(6, 1, new Pawn(false));
		this.squares[6][2] = new Square(6, 2, new Pawn(false));
		this.squares[6][3] = new Square(6, 3, new Pawn(false));
		this.squares[6][4] = new Square(6, 4, new Pawn(false));
		this.squares[6][5] = new Square(6, 5, new Pawn(false));
		this.squares[6][6] = new Square(6, 6, new Pawn(false));
		this.squares[6][7] = new Square(6, 7, new Pawn(false));

		this.squares[7][0] = new Square(7, 0, new Rook(true));
		this.squares[7][1] = new Square(7, 1, new Knight(true));
		this.squares[7][2] = new Square(7, 2, new Bishop(true));
		this.squares[7][3] = new Square(7, 3, new Queen(true));
		this.squares[7][4] = new Square(7, 4, new King(true));
		this.squares[7][5] = new Square(7, 5, new Bishop(true));
		this.squares[7][6] = new Square(7, 6, new Knight(true));
		this.squares[7][7] = new Square(7, 7, new Rook(true));
	}

	public getBox(x: number, y: number): Square | Error {

		if (x < 0 || x > 7 || y < 0 || y > 7) {
			throw new Error('Index out of bounds');
		}

		return this.squares[x][y];
	}

	// public initializeBoard() {
	// 	var gameBoard: Object[] = new Array();
	// 	let isWhite: boolean;

	// 	this.startingPositions.forEach((element, index) => {
	// 		if (element[0] == 'B') isWhite = false;
	// 		if (element[0] == 'W') isWhite = true;
	// 		else return;

	// 		switch (element[1]) {
	// 			case 'R':
	// 				gameBoard[index] = new Square(0, 0, new Rook(isWhite));
	// 				break;
	// 			case 'N':
	// 				gameBoard[index] = new Square(0, 0, new Knight(isWhite));
	// 				break;
	// 			case 'B':
	// 				gameBoard[index] = new Square(0, 0, new Bishop(isWhite));
	// 				break;
	// 			case 'Q':
	// 				gameBoard[index] = new Square(0, 0, new Queen(isWhite));
	// 				break;
	// 			case 'K':
	// 				gameBoard[index] = new Square(0, 0, new King(isWhite));
	// 				break;
	// 			case 'P':
	// 				gameBoard[index] = new Square(0, 0, new Pawn(isWhite));
	// 				break;
	// 		}
	// 	});

	// 	return gameBoard;
	// }

}