import { Board } from './Board';
import { King } from './pieces/King';
import { Player, HumanPlayer, ComputerPlayer } from './Player';
import { Move, Piece, Square } from './types';

enum GameStatus {
	ACTIVE,
	BLACK_WIN,
	WHITE_WIN,
	FORFEIT,
	STALEMATE,
	RESIGNATION
}

export class Game extends Board {
	private players: [Player, Player];
	private board: Board;
	private currentTurn: Player;
	private status: GameStatus;
	private movesPlayed: Move[];

	constructor(playerOne: Player, playerTwo: Player) {

		super();

		// Capture parameters
		this.players = [playerOne, playerTwo];

		// Reset/set board
		this.setBoard();

		// Set turn for white
		playerOne.isWhiteSide() ? this.currentTurn = playerOne : this.currentTurn = playerTwo;

		// Reset moves played
		this.movesPlayed.length = 0;

	}

	public isEnd(): boolean {
		return this.getStatus() !== GameStatus.ACTIVE;
	}

	public getStatus(): GameStatus {
		return this.status;
	}

	public setStatus(status: GameStatus): void {
		this.status = status;
	}

	public playerMove(player: Player, startX: number, startY: number, endX: number, endY: number): boolean {
		let startBox: Square = this.getBox(startX, startY);
		// TODO: Potential bug? startY, endY
		let endBox: Square = this.getBox(startY, endY);
		let move: Move = new Move(player, startBox, endBox);
		return this.makeMove(move, player);
	}

	private makeMove(move: Move, player: Player): boolean {
		let sourcePiece: Piece = move.getStart().getPiece();
		if (sourcePiece === null) {
			return false;
		}

		// Valid player
		if (player !== this.currentTurn) return false;

		if (sourcePiece.isWhite() !== player.isWhiteSide()) return false;

		// Valid move?
		if (!sourcePiece.canMove(board, move.getStart(), move.getEnd())) return false;

		// Capture?
		let destPiece: Piece = move.getStart().getPiece();
		if (destPiece !== null) {
			destPiece.setKilled(true);
			move.setPieceKilled(destPiece);
		}

		// Castling?
		if (sourcePiece !== null
			&& sourcePiece instanceof King
			&& sourcePiece.isCastlingMove()) {
			move.setCastlingMove(true);
		}

		// Store the move
		this.movesPlayed.add(move);

		// Move piece from the start box to end box
		move.getEnd().setPiece(move.getStart().getPiece());
		move.getStart.setPiece(null);

		if (destPiece !== null && destPiece instanceof King) {
			player.isWhiteSide() ? this.setStatus(GameStatus.WHITE_WIN) : this.setStatus(GameStatus.BLACK_WIN);
		}

		// Set the current turn to the other player
		this.currentTurn === this.players[0] ? this.currentTurn = this.players[1] : this.currentTurn = this.players[0];

		return true;

	}

}