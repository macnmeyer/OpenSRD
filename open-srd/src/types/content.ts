type ContentTypeList = Spell | Item | NPC;

export type Spell = {
    id: string;
    name: string;
    source: string;
    discipline: string;
    cost: number | string;
    complexity: number | string;
    text: string;
    tags: string[];
}

export type Item = {
    id: string;
    name: string;
    source: string;
    cost: number | string;
    rarity: string;
    text: string;
    tags: string[];
}



export type NPC = {
    id: string;
    name: string;
    source: string;
}