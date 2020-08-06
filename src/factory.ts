import { IDependency, IPayload } from "./types";

export interface IFactory {}

class Factory {
  private _dependency: IDependency;

  constructor(dependency: IDependency) {
    this._dependency = dependency;
  }

  /**
   * create object
   * @param targetClass
   * @param payload
   */
  create<T>(
    targetClass: new (dependency: IDependency, payload: IPayload) => T,
    payload: IPayload
  ): T {
    return new targetClass(this._dependency, payload);
  }
}

export default Factory;
