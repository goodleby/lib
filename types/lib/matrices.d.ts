export declare const matrixDot: (A: number[][], B: number[][]) => number[][];
export declare const matrixPlus: (A: number[][], B: number[][]) => number[][];
export declare const matrixMinus: (A: number[][], B: number[][]) => number[][];
export declare const linearMatrixDot: (A: number[][], B: number[][]) => number[][];
export declare const matrixApply: <T>(matrix: T[][], fn: (item: T, x: number, y: number) => T) => T[][];
export declare const getMatrix: <T>(rows: number, cols: number, fillFunction: (x: number, y: number) => T) => T[][];
export declare const getMatrixClone: (matrix: any[], fillFunction: () => any) => any[];
export declare const transposeMatrix: <T>(matrix: T[][]) => T[][];
