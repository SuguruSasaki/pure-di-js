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
        return new targetClass(this._dependency(), payload);
    }
    /**
     * Create JSX object
     * @param payload
     */
    createJsx(component, payload) {
        const props = { dependency: this._dependency(), payload };
        return component({ ...props });
    }
}
exports.default = Factory;
