import { createContext, useContext, useState } from "react";

{/* To-do: Make this more generic to work with any entity type, not just spells.

  So, it imports all content lists at once. Each list is a single JSON that contains one array. That array is full of objects. Each object is an entity.
  The JSON file name is the entity type. So, for example, there would be a spells.json file that contains an array of spell objects.
  There would also be an items.json file that contains an array of item objects, and so on.

  This means that to load the data, we first do a glob import to get all the JSON files in the content directory.
  Then we loop through each file, extract the entity type from the file name, and store the array of entities in the database under that entity type.





  */}

type Database = {
  [contentType: string]: {
    [entityID: string]: Record<string, any>
  }
}


function dataLoader() {

  const globOfEntityTypes: Record<string, { default: Array<Record<string, any>> }> = import.meta.glob("root/src/user-content/game-rules/**/*.json",
    { eager: true });
    {/* Object. Keys: file paths. Values: {default: array of json objects} */}
    {console.log("glob:",Object.values(globOfEntityTypes))}
  const db: Record<string, any> = {}

  for (const [filePath, contentModule] of Object.entries(globOfEntityTypes)) {
    console.log(contentModule.default)
    const filePathParts = filePath.split("/")
    const contentType = filePathParts.at(-2)
    console.log("content type", contentType)
    if (!contentType) continue
      {/* filPath is a string. filePathParts is an array of strings where each entry is part of the file path. contentType is the name of the folder containing the file we'll work with */}
    if (!db[contentType]) {
      db[contentType] = {}
      console.log
    }
    const arrayOfEntities = contentModule.default;
    console.log("array of entities:", arrayOfEntities)
      {/* currentDataFileContent = the array of json objects */}
      {/* Goal: db.contentType["id of anything in currentDataFileContent"] */}
    for (const entity of arrayOfEntities) {
      const entityID = entity.ID ?? entity.Name
      if (!entityID) continue
      db[contentType][entityID] = entity
      console.log("entity:", entity)
    }
  }
  return db;
}

const DatabaseContext = createContext<Database | undefined>(undefined)

export const DatabaseProvider = ({ children }: { children: React.ReactNode }) => {

  const [contentDatabase, setContentDatabase] = useState(dataLoader());

  return (
    <DatabaseContext.Provider value={contentDatabase}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const db = useContext(DatabaseContext);
  if (!db) {
    throw new Error("Content Database Error")
  }
  return db;
}
