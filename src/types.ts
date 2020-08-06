export type IDependency = {};

export type IPayload = {};

export interface IFactory {
  create<T>(
    targetClass: new (dependency: IDependency, payload: IPayload) => T,
    payload: IPayload
  ): T;
}
