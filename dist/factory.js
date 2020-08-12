"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Factory {
    constructor(dependency) {
        this._dependency = dependency;
    }
    /**
     * create object
     * @param targetClass
     * @param payload
     */
    create(targetClass, payload) {
        return new targetClass(this._dependency(), payload);
    }
    /**
     * Create JSX object
     * @param payload
     */
    createJsx(Component) {
        return react_1.default.createElement(Component, Object.assign({}, this._dependency()));
    }
}
exports.default = Factory;
