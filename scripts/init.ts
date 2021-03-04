import * as Path from "path";
global['appRoot'] = Path.resolve(__dirname);
require('dotenv').config();
if (!process.env.API_DISCORD) process.exit(1);

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			API_DISCORD: string
		}
	}
}