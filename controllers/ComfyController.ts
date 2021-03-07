export default class ComfyController<ComfyModel, ComfyView> {

	private model: ComfyModel;
	private view: ComfyView;

	constructor(model: ComfyModel, view: ComfyView) {
		this.model = model
		this.view = view
	}
}