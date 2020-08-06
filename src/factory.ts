import { IDependency, IPayload, IModule } from "./types";

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
  create<T extends IModule>(targetClass: new () => T, payload: IPayload): T {
    const instance = new targetClass();
    return instance.inject(this._dependency, payload);
  }
}

export default Factory;
