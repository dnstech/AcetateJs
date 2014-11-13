var Acetate;
(function (Acetate) {
    var Sheet = (function () {
        function Sheet(canvas) {
            this.canvas = canvas;
            // Create an empty project and a view for the canvas:
            paper.setup(canvas);
        }
        return Sheet;
    })();
    Acetate.Sheet = Sheet;
})(Acetate || (Acetate = {}));
//# sourceMappingURL=acetate.js.map
