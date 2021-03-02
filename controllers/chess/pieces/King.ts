import { Piece } from '../Piece';
import { Square, Board } from '../types';

export class King extends Piece {

	private castled: boolean = false;

	constructor(white: boolean) {

		super(white);

	}

	public isCastled(): boolean {

		return this.castled;

	}

	public setCastled(castled: boolean): void {

		this.castled = castled;

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

	private isValidCastling(board: Board, start: Square, end: Square): boolean {

		if (this.isCastled()) {

			return false;

		}

		return true;

		// Todo, return true or false

	}

	public isCastlingMove(start: Square, end: Square) {

		// Todo, check correct start and end positions

	}

}