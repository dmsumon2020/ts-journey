declare var userData: {
    name: string;
    age: number;
    occupation: string;
    permanent: boolean;
};
declare var userData2: {
    name: string;
    age: number;
    occupation: string;
    permanent: boolean;
    company: string | undefined;
};
declare var userData3: {
    [key: string]: any;
};
declare var nestedObj: {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
        road: number;
    };
};
declare const nestedObj2: {
    [key: string]: string | number | {
        [key: string]: any;
    };
};
