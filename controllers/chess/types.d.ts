export type Piece = {
	isWhite: Function;
	isBlack: Function;
	isKilled: Function;
	setWhite: Function;
	setBlack: Function;
	setKilled: Function;
	canMove: Function;
}

export type Board = {
	resetBoard: Function;
	initializeBoard: Function;
}

export type Square = {
	getX: Function;
	getY: Function;
	getPiece: Function;
	setX: Function;
	setY: Function;
	setPiece: Function;
}