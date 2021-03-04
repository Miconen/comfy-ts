import { Client } from "@typeit/discord";

export async function startDiscordBot() {
	const client = new Client({
		classes: [
			`${global['appRoot']}/controllers/ComfyDiscord.ts`
		],
		silent: true,
		variablesChar: ":"
	});

	await client.login(process.env.API_DISCORD);
}