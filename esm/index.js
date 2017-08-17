const typeName = Symbol('typeName');

export class PrimitiveUndefined {
    static [Symbol.hasInstance](x) {
        return x === undefined;
    }
}
export class PrimitiveNull {
    static [Symbol.hasInstance](x) {
        return x === null;
    }
}
export class PrimitiveBoolean {
    static [Symbol.hasInstance](x) {
        return typeof x === 'boolean';
    }
}
export class PrimitiveNumber {
    static [Symbol.hasInstance](x) {
        return typeof x === 'number';
    }
}

export class PrimitiveString {
    static [Symbol.hasInstance](x) {
        return typeof x === 'string';
    }
}

export class PrimitiveSymbol {
    static [Symbol.hasInstance](x) {
        return typeof x === 'symbol';
    }
}
export function union(...types) {
    return class {
        static [Symbol.hasInstance](x) {
            for (const type of types) {
                if (type[Symbol.hasInstance](x)) {
                    return true;
                }
            }
            return false;
        }
        static get [typeName]() {
            return types.map(t => toTypeName(t)).join(' | ');
        }
    };
}
export function toTypeName(type) {
    if (typeof type !== 'function') {
        throw new TypeError('Not a type: '+type);
    }
    return type[typeName] || type.name;
}
function checkInternal(args) {
    if ((args.length % 2) !== 0) {
        throw new TypeError('Need an even number of arguments: '+args);
    }
    for (let i=0; i < args.length; i+=2) {
        const value = args[i];
        const type = args[i+1];
        if (! (value instanceof type)) {
            return i;
        }
    }
    return -1;
}
export function force(...args) {
    const failureIndex = checkInternal(args);
    if (failureIndex >= 0) {
        const value = args[failureIndex];
        const type = args[failureIndex+1];
        throw new TypeError(`Value at index #${failureIndex/2}, ${String(value)}, is not an instance of ${toTypeName(type)}`);
    }
    // Everything is OK
}
export function check(...args) {
    const failureIndex = checkInternal(args);
    return failureIndex < 0;
}