import * as Path from "path";
import {
	Discord,
	On,
	ArgsOf
} from "@typeit/discord";

@Discord('-command ', {
	import: [
		// Import commands here, change around to autoload everything
		Path.join(global['appRoot'], 'controllers/commands', '*.ts')
	]
})
export abstract class ComfyDiscord {
	@On("message")
	private onMessage([message]: ArgsOf<"message">) {
		console.log(`${message.author.username}: ${message.content}`);
	}
}