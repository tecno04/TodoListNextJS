export interface ErrorsYup {
    value:   Value;
    path:    string;
    type:    string;
    params:  Params;
    errors:  string[];
    inner:   any[];
    name:    string;
    message: string;
}

export interface Params {
    value:             Value;
    originalValue:     Value;
    path:              string;
    spec:              Spec;
    disableStackTrace: boolean;
    type:              string;
}

export interface Value {
}

export interface Spec {
    strip:             boolean;
    strict:            boolean;
    abortEarly:        boolean;
    recursive:         boolean;
    disableStackTrace: boolean;
    nullable:          boolean;
    optional:          boolean;
    coerce:            boolean;
}
