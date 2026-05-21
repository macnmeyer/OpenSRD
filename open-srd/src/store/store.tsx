import { create, createStore } from 'zustand'
import type { Spell, SpellDatabase } from '../types/content.js';

const spellsImported = import.meta.glob("../data/**/*.json", {
  eager: true,
});

const spells: Record<string, Spell> = {};

for (const path in spellsImported) {
    const module = spellsImported[path] as { default: Spell };
    const entry = module.default;
    spells[entry.id] = entry;
}

type SpellStore = {
    database: SpellDatabase;
    setDatabase: (db: SpellDatabase) => void;
}

const spellStore = createStore((set) => ({
    setDatabase: (db) => set({ database: db }),
}))


