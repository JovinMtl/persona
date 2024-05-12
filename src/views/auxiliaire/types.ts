// This file will contain type and interfaces to be used
// accross  the entire project


export interface Offer {
    title : string;
    content : string;
    color : string;
}

export interface  Intro {
    title : string;
    content : string;
    detail : boolean;
}

export interface Proof {
    title : string;
    image : string;
    description : string;
}

export type MyOffer = 0 | 1 | 2