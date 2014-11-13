declare module paper {
    interface Tool {
    }

    interface Symbol {
    }

    interface Layer {
    }

    interface Style {
    }

    interface Size {
        width;
        height;
        equals();
        clone();
        toString();
        isZero();
        isNaN();
        round();
        ceil();
        floor();
        abs();
    }

    interface Rectangle {
        (point: Point, size: Size);
        (object);
        (x, y, width, height);
        (from, to);
        (rt: Rectangle);

        x: number;
        y: number;
        width: number;
        height: number;
        point: Point;
        size: Size;

        left;
        top;
        right;
        bottom;
        center;
        topLeft;
        topRight;
        bottomLeft;
        bottomRight;
        leftCenter;
        topCenter;
        rightCenter;
        bottomCenter;
        area;
        selected;
        clone();

        equals(rect);
        toString(): string;

        isEmpty(): boolean;

        contains(point: Point);
        contains(rect: Rectangle);
        intersects(rect);

        intersect(rect);
        unite(rect);
        include(point);
        expand(amount);
        expand(hor, ver);
        scale(amount);
        scale(hor, ver);
    }

    interface Point {
        x: number;
        y: number;
    }

    interface View {
        element;
        pixelRatio;
        resolution;
        viewSize;
        bounds;
        size;
        center;
        zoom;
        onFrame;
        onResize;
        remove();
        isVisible();
        scrollBy(point);
        play();
        pause();
        update();
        projectToView();
        viewToProject();
        on(type, func);
        on(param);
        off(type, func);
        off(param);
        emit(type, event);
        responds(type);
    }

    interface Item {
        tangent: Point;
        normal: Point;
        curvature: number;
        id: number;
        className: string;
        name: string;
        style: Style;
        visible: boolean;
        blendMode: string;
        opacity: number;
        selected: boolean;
        clipMask: boolean;
        data: any;
        position: Point;
        pivot: Point;
        bounds: Rectangle;
        strokeBounds;
        handleBounds;
        rotation;
        scaling;
        matrix;
        globalMatrix;
        applyMatrix;
        pro
    }

    interface Project {
        (element: HTMLElement);
        view: View;
        currentStyle: Style;
        index: number;
        layers: Layer[];
        activeLayer: Layer;
        symbols: Symbol[];
        selectedItems: Item[];

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
        project: Project;
        projects: Project[];
        view: View;
        tool: Tool;
        tools: Tool[];

        install(scope);
        setup(element);
        activate();
    }
}

declare module PaperScope {
    export function get(id);
}

declare var paper: paper.PaperScope;