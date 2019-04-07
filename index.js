"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map = new Map();
function register(instance) {
    return { as: function (specifier) { return map.set(specifier, instance); } };
}
exports.register = register;
function inject(specifier) {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () { return map.get(specifier); },
        });
    };
}
exports.inject = inject;
//# sourceMappingURL=index.js.map