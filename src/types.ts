export type IDependency = {};

export type IPayload = {};

export type IProps = {
  dependency: IDependency;
  payload: IPayload;
};

export interface IFactory {
  create<T>(
    targetClass: new (dependency: IDependency, payload: IPayload) => T,
    payload: IPayload
  ): T;
}
