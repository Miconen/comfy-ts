export abstract class Player {
	public whiteSide: boolean;
	public humanPlayer: boolean | [boolean, string];

	constructor(whiteSide: boolean) {
		this.whiteSide = false;
		this.humanPlayer = false;
	}

	public isWhiteSide() {
		return this.whiteSide;
	}

	public isHumanPlayer() {
		return this.humanPlayer;
	}
}

export class HumanPlayer extends Player {
	constructor(whiteSide: boolean, discordId: string) {
		super(whiteSide);
		this.whiteSide = whiteSide;
		this.humanPlayer = [true, discordId];
	}
}

export class ComputerPlayer extends Player {
	constructor(whiteSide: boolean) {
		super(whiteSide);
		this.whiteSide = whiteSide;
		this.humanPlayer = false;
	}
}