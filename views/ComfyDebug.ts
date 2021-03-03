interface debugInterface {
	reply?: messageInterface;
	kill?: boolean;
}

interface messageInterface {
	reply: string;
	msg: object;
}

class ComfyError {

	/**
	 * Levels
	 * 0 = No Errors / Warnings
	 * 1 = Warnings
	 * 2 = Errors
	 * 3 = Warnings & Errors
	 */

	private static level: number;

	private static warningPrefix: string = 'WARNING:';
	private static errorPrefix: string = 'ERROR:';

	public static setLevel(level: number): void {

		ComfyError.level = level;

	}

	public static getLevel(): number {

		return ComfyError.level;

	}

	public static error(error: string, args?: debugInterface): void {

		if (ComfyError.level !== 2 && ComfyError.level !== 3) return;

		console.log(`${ComfyError.errorPrefix} ${error}`);

		if (args?.reply) console.log(args.reply);
		if (args?.kill) ComfyError.kill(error);

	}

	public static warn(warning: string, args?: debugInterface): void {

		if (ComfyError.level !== 1 && ComfyError.level !== 3) return;

		console.log(`${ComfyError.warningPrefix} ${warning}`);

		if (args?.reply) console.log(args.reply);
		if (args?.kill) ComfyError.kill(warning);

	}

	private static kill(msg: string): void {

		throw new Error(msg);

	}

}