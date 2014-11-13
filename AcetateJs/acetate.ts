module Acetate {
    export class Sheet {
        constructor(private canvas: HTMLCanvasElement) {
            // Create an empty project and a view for the canvas:
            paper.setup(canvas);
        }
    }
}