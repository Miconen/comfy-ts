import { Canvas, createCanvas, loadImage } from "canvas";

export class ChessCanvas {
    private canvasSize: number;
    private tileSize: number;
    private chessView: Canvas;

    constructor(){
        this.canvasSize = 410;
        this.tileSize = this.canvasSize / 10;
        this.chessView = this.createBoard();
    }

    createBoard(){
        const chessView = createCanvas(this.canvasSize, this.canvasSize);
        const cvx = chessView.getContext("2d");

        loadImage('./images/chessboard.svg').then(image => {
            cvx.drawImage(image, 0, 0);
        })
        
        return chessView;
    }

    toImageBuffer(){
        return this.chessView.toBuffer();
    }
}