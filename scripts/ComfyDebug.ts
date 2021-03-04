interface debugInterface {
	reply?: messageInterface;
	kill?: boolean;
}

interface messageInterface {
	reply: string;
	msg: object;
}

class ComfyDebug {

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

		ComfyDebug.level = level;

	}

	public static getLevel(): number {

		return ComfyDebug.level;

	}

	public static error(error: string, args?: debugInterface): void {

		if (ComfyDebug.level !== 2 && ComfyDebug.level !== 3) return;

		console.log(`${ComfyDebug.errorPrefix} ${error}`);

		if (args?.reply) console.log(args.reply);
		if (args?.kill) ComfyDebug.kill(error);

	}

	public static warn(warning: string, args?: debugInterface): void {

		if (ComfyDebug.level !== 1 && ComfyDebug.level !== 3) return;

		console.log(`${ComfyDebug.warningPrefix} ${warning}`);

		if (args?.reply) console.log(args.reply);
		if (args?.kill) ComfyDebug.kill(warning);

	}

	private static kill(msg: string): void {

		throw new Error(msg);

	}

}