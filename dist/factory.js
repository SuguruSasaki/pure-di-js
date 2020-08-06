"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return new targetClass(this._dependency, payload);
    }
}
exports.default = Factory;
