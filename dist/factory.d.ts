import { IDependency, IPayload, IFactory } from "./types";
declare class Factory<T> implements IFactory {
    private _dependency;
    constructor(dependency: () => IDependency);
    /**
     * create object
     * @param targetClass
     * @param payload
     */
    create<T>(targetClass: new (dependency: IDependency, payload: IPayload) => T, payload: IPayload): T;
}
export default Factory;
