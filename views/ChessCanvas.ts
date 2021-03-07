import { Canvas, createCanvas, loadImage } from "canvas";

export class ChessCanvas {
    private canvasSize: number;
    private tileSize: number;
    private chessBoardCanvas: Canvas;

    constructor(){
        this.canvasSize = 410;
        this.tileSize = this.canvasSize / 8;
        this.chessBoardCanvas = this.drawBoard();
    }

    drawBoard(){
        const chessBoardCanvas = createCanvas(this.canvasSize, this.canvasSize);
        const cvx = chessBoardCanvas.getContext("2d");

        loadImage('./images/chessboard.svg').then(image => {
            cvx.drawImage(image, 0, 0);
        })
        
        return chessBoardCanvas;
    }

    toImageBuffer(){
        return this.chessBoardCanvas.toBuffer();
    }
}