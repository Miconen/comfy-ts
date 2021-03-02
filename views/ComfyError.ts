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

	public static error(error: string, kill?: boolean): void {

		if (ComfyError.level === 2 || ComfyError.level === 3) {

			console.log(`${ComfyError.errorPrefix} ${error}`);

			if (kill) ComfyError.kill(error);

		}

	}

	public static warn(warning: string, kill?: boolean): void {

		if (ComfyError.level === 1 || ComfyError.level === 3) {

			console.log(`${ComfyError.warningPrefix} ${warning}`);

			if (kill) ComfyError.kill(warning);

		}

	}

	private static kill(msg: string): void {

		throw new Error(msg);

	}

}