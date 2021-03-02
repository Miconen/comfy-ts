import { Pawn } from './pieces/Pawn';
import { Knight } from './pieces/Knight';
import { Bishop } from './pieces/Bishop';
import { Rook } from './pieces/Rook';
import { Queen } from './pieces/Queen';
import { King } from './pieces/King';
import { Piece } from './types';

export class Square {

	private x: number;
	private y: number;
	private piece: Piece;

	constructor(x: number, y: number, piece: Piece) {

		this.x = x;
		this.y = y;
		this.piece = piece;

	}

	/**
	 * Get
	 */
	public getX(): number {

		return this.x;

	}

	public getY(): number {

		return this.y;

	}

	public getPiece(): Piece {

		return this.piece;

	}

	/**
	 * Set
	 */
	public setX(x: number): void {

		this.x = x;

	}

	public setY(y: number): void {

		this.y = y;

	}

	public setPiece(p: Piece): void {

		this.piece = p;

	}

}