require('./scripts/init');
require('./scripts/ComfyDebug');

require('./models/ComfyModel');
require('./views/ComfyView');
require('./controllers/ComfyController');

const App = new ComfyController(new ComfyModel(), new ComfyView());

import { startDiscordBot } from './controllers/StartDiscord';
if (process.env.API_DISCORD) startDiscordBot();