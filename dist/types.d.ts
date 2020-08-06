export declare type IDependency = {};
export declare type IPayload = {};
export declare type IProps = {
    dependency: IDependency;
    payload: IPayload;
};
export interface IFactory {
    create<T>(targetClass: new (dependency: IDependency, payload: IPayload) => T, payload: IPayload): T;
    createJsx<T extends Function>(component: T, payload: IPayload): T;
}
