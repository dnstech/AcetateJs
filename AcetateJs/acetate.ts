module Acetate {
    class AcetateLayer {
        constructor(private canvas: HTMLCanvasElement) {
            // Create an empty project and a view for the canvas:
            paper.setup(canvas);
        }
    }
}