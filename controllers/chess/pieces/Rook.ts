import { Board } from '../Board';
import { Piece } from '../Piece';
import { Square } from '../Square';

export class Rook extends Piece {

	constructor(white: boolean) {

		super(white);

	}

	public canMove(board: Board, start: Square, end: Square): boolean {

		if (end.getPiece().isWhite() === this.isWhite()) {
			return false;
		}

		let x: number = Math.abs(start.getX() - end.getX());
		let y: number = Math.abs(start.getY() - end.getY());
		if (x + y === 1) {
			// check if this move will not result in the king 
			// being attacked if so return true
			return true;
		}

		return false;

	}

}