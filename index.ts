import * as Discord from "@typeit/discord";

class ComfyModel {
	constructor() {

	}
}

class ComfyView {
	constructor() {

	}
}

class ComfyController {
	constructor(model, view) {
		this.model = model
		this.view = view
	}
}

const app = new Controller(new Model(), new View())