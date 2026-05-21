import Header from "./components/header/Header.js"
import "./App.css"
import { useContext } from "react";
import { SpellDatabaseContext, SpellDatabaseProvider } from "./context/DatabaseContext.js";
import EntityHoverDisplay from "./components/entityHoverDisplay/EntityHoverDisplay.js";
import EntityTable from "./components/entityTable/EntityTable.js";
import { columns, DataTable } from "./components/entityTable/TableTest.js";
import Layout from "./layouts/Layout.js";
import Footer from "./components/footer/Footer.js";



function App() {

  const spells = useContext(SpellDatabaseContext);
  const dataForTable = Object.values(spells || {});

  return (
    <>
      <main className="flex flex-col items-center min-h-svh">
        <Header />
        <div className="layout-wrapper h-full w-full">
          <Layout />
        </div>
        {/* Tests for database calls, ignore for now
        <p>Spell count: {Object.keys(spells || {}).length}</p>
        <button onClick={() => console.log(spells?.["example-spell"]?.text)}>Log Spells</button>
        <ul className="table-header flex flex-row">
          {Object.keys(spells?.["scan"] || {}).map((property, order) => (
            <li key={property} className="w-fit min-w-20 bg-gray-500 p-2 m-1 rounded">
              <p className="w-fit m-auto">{property}</p>
            </li>
          ))}
        </ul>
        {Object.entries(spells || {}).map(([spellId, spell]) => (
          <div key={spellId} className="spell-card">
            <h2>{spell.name}</h2>
            <p>{spell.text}</p>
          </div>
        ))}
        */}
        <div className="hover-me-test relative w-fit">
          <EntityHoverDisplay entityID="scan">
            <p>Scan</p>
          </EntityHoverDisplay>
        </div>
        <EntityTable />
        <DataTable columns={columns} data={dataForTable? dataForTable : []} />
        <Footer />
      </main>
    </>
  )
}

export default App
