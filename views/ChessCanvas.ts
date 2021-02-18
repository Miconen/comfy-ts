import { Canvas, createCanvas, loadImage } from "canvas";

export class ChessCanvas {
    private canvasSize: number;
    private tileSize: number;
    private chessView: Canvas;

    constructor(){
        this.canvasSize = 450;
        this.tileSize = this.canvasSize / 10;
        this.chessView = this.createBoard();
    }

    createBoard(){
        const chessView = createCanvas(this.canvasSize, this.canvasSize);
        const cvx = chessView.getContext("2d");

        cvx.fillStyle = 'brown';
        cvx.fillRect(0, 0, this.canvasSize, this.canvasSize);

        loadImage('./images/chessboard.svg').then(image => {
            cvx.drawImage(image, 25, 25);
        })
        
        return chessView;
    }

    toImageStream(){
        return this.chessView.toBuffer();
    }
}