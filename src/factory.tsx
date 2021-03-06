import React from "react";
import { IDependency, IPayload, IFactory } from "./types";

class Factory<T> implements IFactory {
  private _dependency: () => IDependency;

  constructor(dependency: () => IDependency) {
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
    return new targetClass(this._dependency(), payload);
  }

  /**
   * Create JSX object
   * @param payload
   */
  createJsx(Component: React.FC<any>): JSX.Element {
    return <Component {...this._dependency()} />;
  }
}

export default Factory;
