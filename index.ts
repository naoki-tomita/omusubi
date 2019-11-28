const map: Map<any, any> = new Map();

export function register(instance: any) {
  return { as: (specifier: any) => map.set(specifier, instance) };
}

export function inject(specifier: any): PropertyDecorator {
  return function(target: any, propertyKey) {
    Object.defineProperty(target, propertyKey, {
      get: () => map.get(specifier),
    });
    return target;
  }
}
