export declare class PrimitiveUndefined {
    static [Symbol.hasInstance](x: any): boolean;
}

export declare class PrimitiveNull {
    static [Symbol.hasInstance](x: any): boolean;
}

export declare class PrimitiveBoolean {
    static [Symbol.hasInstance](x: any): boolean;
}

export declare class PrimitiveNumber {
    static [Symbol.hasInstance](x: any): boolean;
}

export declare class PrimitiveString {
    static [Symbol.hasInstance](x: any): boolean;
}

export declare class PrimitiveSymbol {
    static [Symbol.hasInstance](x: any): boolean;
}

export declare function union(...types: any[]): {
    new(): {};
    [Symbol.hasInstance](x: any): boolean;
    readonly [typeName]: string;
};

export declare function toTypeName(type: any): any;

export declare function force(...args: any[]): void;

export declare function check(...args: any[]): boolean;
