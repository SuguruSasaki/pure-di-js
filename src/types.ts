import React from "react";

export interface IDependency {}

export interface IPayload {}

export type IProps = {
  dependency: IDependency;
  payload: IPayload;
};

export interface IFactory {
  create<T>(
    targetClass: new (dependency: IDependency, payload: IPayload) => T,
    payload: IPayload
  ): T;

  createJsx(Component: React.FC<any>): JSX.Element;
}
