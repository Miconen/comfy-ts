import {
	On,
	ArgsOf
} from "@typeit/discord";

export abstract class MessageDelete {

	@On("messageDelete")
	async onMessageDelete([message]: ArgsOf<"messageDelete">) {
		console.log('message deleted');
	}

}