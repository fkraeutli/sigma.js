/**
 * Sigma.js Settings
 * =================================
 *
 * The list of settings and some handy functions.
 * @module
 */
import { Attributes } from "graphology-types";
import drawLabel from "./rendering/canvas/label";
import drawHover from "./rendering/canvas/hover";
import drawEdgeLabel from "./rendering/canvas/edge-label";
import { EdgeDisplayData, NodeDisplayData } from "./types";
import CircleNodeProgram from "./rendering/webgl/programs/node.fast";
import LineEdgeProgram from "./rendering/webgl/programs/edge";
import { EdgeProgramConstructor } from "./rendering/webgl/programs/common/edge";
import { NodeProgramConstructor } from "./rendering/webgl/programs/common/node";
/**
 * Sigma.js settings
 * =================================
 */
export interface Settings {
    hideEdgesOnMove: boolean;
    hideLabelsOnMove: boolean;
    renderLabels: boolean;
    renderEdgeLabels: boolean;
    enableEdgeClickEvents: boolean;
    enableEdgeWheelEvents: boolean;
    enableEdgeHoverEvents: boolean | "debounce";
    defaultNodeColor: string;
    defaultNodeType: string;
    defaultEdgeColor: string;
    defaultEdgeType: string;
    labelFont: string;
    labelSize: number;
    labelWeight: string;
    labelColor: {
        attribute: string;
        color?: string;
    } | {
        color: string;
        attribute?: undefined;
    };
    edgeLabelFont: string;
    edgeLabelSize: number;
    edgeLabelWeight: string;
    edgeLabelColor: {
        attribute: string;
        color?: string;
    } | {
        color: string;
        attribute?: undefined;
    };
    stagePadding: number;
    nodesSizeZoomAdjuster: (ratio: number) => number;
    labelDensity: number;
    labelGridCellSize: number;
    labelRenderedSizeThreshold: number;
    nodeReducer: null | ((node: string, data: Attributes) => Partial<NodeDisplayData>);
    edgeReducer: null | ((edge: string, data: Attributes) => Partial<EdgeDisplayData>);
    zIndex: boolean;
    minCameraRatio: null | number;
    maxCameraRatio: null | number;
    labelRenderer: typeof drawLabel;
    hoverRenderer: typeof drawHover;
    edgeLabelRenderer: typeof drawEdgeLabel;
    allowInvalidContainer: boolean;
    nodeProgramClasses: {
        [type: string]: NodeProgramConstructor;
    };
    nodeHoverProgramClasses: {
        [type: string]: NodeProgramConstructor;
    };
    edgeProgramClasses: {
        [type: string]: EdgeProgramConstructor;
    };
}
export declare const DEFAULT_SETTINGS: Settings;
export declare const DEFAULT_NODE_PROGRAM_CLASSES: {
    circle: typeof CircleNodeProgram;
};
export declare const DEFAULT_EDGE_PROGRAM_CLASSES: {
    arrow: EdgeProgramConstructor;
    line: typeof LineEdgeProgram;
};
export declare function validateSettings(settings: Settings): void;
export declare function resolveSettings(settings: Partial<Settings>): Settings;
