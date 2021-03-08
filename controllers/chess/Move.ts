import { Player, Square, Piece } from './types';

export class Move {
	private player: Player;
	private start: Square;
	private end: Square;
	private pieceMoved: Piece;
	private pieceKilled: Piece;
	private castlingMove: boolean = false;

	constructor(player: Player, start: Square, end: Square) {
		this.player = player;
		this.start = start;
		this.end = end;
		this.pieceMoved = start.getPiece();
	}

	public isCastlingMove(): boolean {
		return this.castlingMove;
	}

	public setCastlingMove(castlingMove: boolean): void {
		this.castlingMove = castlingMove;
	}
}