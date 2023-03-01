"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sigma.js Bundle Endpoint
 * ========================
 *
 * The library endpoint.
 * Will be built so that it exports a global `Sigma` class, that also exposes
 * useful classes as static properties.
 * @module
 */
var sigma_1 = __importDefault(require("./sigma"));
var camera_1 = __importDefault(require("./core/camera"));
var quadtree_1 = __importDefault(require("./core/quadtree"));
var mouse_1 = __importDefault(require("./core/captors/mouse"));
var Sigma = /** @class */ (function (_super) {
    __extends(Sigma, _super);
    function Sigma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sigma.Camera = camera_1.default;
    Sigma.QuadTree = quadtree_1.default;
    Sigma.MouseCaptor = mouse_1.default;
    Sigma.Sigma = sigma_1.default;
    return Sigma;
}(sigma_1.default));
module.exports = Sigma;
