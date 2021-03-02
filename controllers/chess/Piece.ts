import { Square, Board } from './types';

export abstract class Piece {

	private killed: boolean = false;
	private white: boolean = false;

	constructor(white: boolean) {

		this.setWhite(white)

	}

	/**
	 * Is
	 */
	public isWhite(): boolean {

		return this.white;

	}

	public isBlack(): boolean {

		return !this.white;

	}

	public isKilled(): boolean {

		return this.killed;

	}

	/**
	 * Set
	 */
	public setWhite(white: boolean): void {

		this.white = white;

	}

	public setBlack(black: boolean): void {

		this.white = !black;

	}

	public setKilled(killed: boolean): void {

		this.killed = killed;

	}

	public abstract canMove(board: Board, start: Square, end: Square): boolean;

}