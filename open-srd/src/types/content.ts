export type ContentEntry = {
    id: string;
    name: string;
    source: string;
    text: string;
    tags: string[];
}

export type ContentDatabase = null | { [id: string]: ContentEntry };

export type Spell = {
    id: string;
    name: string;
    source: string;
    cost: number | string;
    complexity: number | string;
    text: string;
    tags: string[];
}
export type SpellDatabase = null | { [id: string]: Spell };

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