export interface book {
    title: string
    subtitle: string
    author: string
    desc: string
}

export interface author {
    name: Array<string>
    books: Array<string[]>
}

export interface reading_list{
    levels: Array<level>
}

export interface level {
    title: string
    groups: Array<group>
}

export interface group {
    FLAGS: Array<number>
    books: Array<book>
    children: Array<group>
}

export const FLAGS = {
    
    GROUPS: {
        CAT_ETHICS          : 0b0000_0001,
        CAT_STATE_CRITICS   : 0b0000_0010,
        CAT_ECONOMICS       : 0b0000_0100,
        MANDATORY           : 0b0000_1000
    },

    // at this
    AUTHORS: {
        ATOM_IS_NAME    : 0b0000_0000,
        ATOM_IS_PREFIX  : 0b0000_0001,
        ATOM_IS_MIDFIX  : 0b0000_0010, // see: https://en.wikipedia.org/wiki/Nobiliary_particle
        ATOM_IS_POSTFIX : 0b0000_0100
    }
}

// name atoms
interface ATOMS {
    ATOM_IS_NAME                : number,
    ATOM_IS_PREFIX              : number,
    ATOM_IS_MIDFIX              : number, // see: https://en.wikipedia.org/wiki/Nobiliary_particle
    ATOM_IS_POSTFIX             : number,
    ATOM_IS_HYPHEN              : number,
    ATOM_IS_SPANISH_PRIMARY     : number, // see: https://en.wikipedia.org/wiki/Spanish_naming_customs
    ATOM_IS_SPANISH_SECONDARY   : number,
    ATOM_IS_ORG                 : number,
}
export const ATOMS = {
    ATOM_IS_NAME                : 0,
    ATOM_IS_PREFIX              : 1,
    ATOM_IS_MIDFIX              : 2, // see: https://en.wikipedia.org/wiki/Nobiliary_particle
    ATOM_IS_POSTFIX             : 3,
    ATOM_IS_HYPHEN              : 4,
    ATOM_IS_SPANISH_PRIMARY     : 5, // see: https://en.wikipedia.org/wiki/Spanish_naming_customs
    ATOM_IS_SPANISH_SECONDARY   : 6,
    ATOM_IS_ORG                 : 7,
}
