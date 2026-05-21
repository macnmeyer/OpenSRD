import { createContext, useState } from "react";
import type { Spell, SpellDatabase } from "../types/content.js";

{/* To-do: Make this more generic to work with any entity type, not just spells. */}

function spellLoader() {
    const importedModules: Record<string, { default: Spell }> = import.meta.glob("/src/srd-data/spells/*.json", { eager: true });
    const spells: SpellDatabase = {};
    for (const path in importedModules) {
        const currentSpellData = importedModules[path]?.default;
        if (currentSpellData) {
            spells[currentSpellData.id] = currentSpellData;
        }
    }
    return spells;
}

export const SpellDatabaseContext = createContext<null | SpellDatabase>(null);

export const SpellDatabaseProvider = ({ children }: { children: React.ReactNode }) => {

  const [spellDatabase, setSpellDatabase] = useState<SpellDatabase>(spellLoader);

  return (
    <SpellDatabaseContext.Provider value={spellDatabase}>
      {children}
    </SpellDatabaseContext.Provider>
  );
};