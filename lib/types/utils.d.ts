import { NonNullableMetadata } from './input';
import { MetadataOutput } from './output';
export declare type PickRenameMulti<T, R extends {
    [K in keyof R]: K extends keyof T ? PropertyKey : 'Error: key not in T';
}> = {
    [P in keyof T as P extends keyof R ? R[P] : P]: T[P];
};
export declare type RewriteKey<M extends MetadataOutput, O extends keyof NonNullableMetadata, N extends string | undefined = undefined> = M[O] extends NonNullableMetadata[O] ? Record<N extends string ? N : `logging.googleapis.com/${O}`, M[O]> : {};
