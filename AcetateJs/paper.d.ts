interface PaperTool {
}

interface PaperSymbol {
}

interface PaperLayer {
}

interface PaperStyle {
}
interface Point {
    x: number;
    y: number;
}
interface PaperView {
}

interface PaperItem {
    tangent: Point;
    normal:Point;
    curvature:number;
    id:number;
    className:string;
    name:string;
    style: PaperStyle;
    visible: boolean;
    blendMode:string;
    opacity:number;
    selected:boolean;
    clipMask:boolean;
    data:any;
    position: Point;
    pivot;
    bounds;
    strokeBounds;
    handleBounds;
    rotation;
    scaling;
    matrix;
    globalMatrix;
    applyMatrix;
    pro
}

interface PaperProject {
    (element: HTMLElement);
    view: PaperView;
    currentStyle: PaperStyle;
    index: number;
    layers: PaperLayer[];
    activeLayer: PaperLayer;
    symbols: PaperSymbol[];
    selectedItems: PaperItem[];

    activate();
    clear();
    isEmpty(): boolean;
    remove();
    selectAll();
    deselectAll();
    hitTest(point, options?);
    getItems(match);
    getItem(match);
    exportJSON(options?);
    importJSON(json);
    exportSVG(options?);
    importSVG(svg, options?);
}

interface PaperScope {
    ();
    version: string;
    settings: {
        applyMatric: boolean;
        handleSize: number;
        hitTolerance: number;
    };
    project:PaperProject;
    projects:PaperProject[];
    view:PaperView;
    tool:PaperTool;
    tools:PaperTool[];

    install(scope);
    setup(element);
    activate();
}

declare module PaperScope {
    export function get(id);
}

declare var paper: PaperScope;