export interface IDependency {}

export interface IPayload {}

export interface IModule {
  inject(dependency: IDependency, payload: IPayload);
}
