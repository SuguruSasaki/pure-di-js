import { IDependency, IPayload, IFactory, IProps } from "./types";

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
  createJsx<T extends Function>(component: T, payload: IPayload): T {
    const props: IProps = { dependency: this._dependency(), payload };
    return component({ ...props });
  }
}

export default Factory;
