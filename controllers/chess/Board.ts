import { Square } from './Square';
import { Rook } from './pieces/Rook';
import { Knight } from './pieces/Knight';
import { Bishop } from './pieces/Bishop';
import { Queen } from './pieces/Queen';
import { King } from './pieces/King';
import { Pawn } from './pieces/Pawn';

export class Board {

	private squares: Square[][];

	constructor() {

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

		for (let i = 0; i < 6; i++) {
			for (let ii = 0; i < 6; ii++) {
				this.squares[i][ii] = new Square(i, ii, null);
			}
		}

	}

	public getBox(x: number, y: number): Square {

		if (x < 0 || x > 7 || y < 0 || y > 7) {
			throw new Error('Index out of bounds');
		}

		return this.squares[x][y];
	}
}