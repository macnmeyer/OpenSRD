import Header from "./components/header/Header.js"
import "./App.css"
import Layout from "./layouts/Layout.js";
import Footer from "./components/footer/Footer.js";
import { AppSidebar } from "./components/app-sidebar/AppSidebar.js";
import { Outlet } from "react-router";




function App() {

  return (
    <>
      <main className="flex flex-col items-center min-h-svh w-svw overflow-hidden">
        <Header />
        <div className="layout-wrapper flex flex-col flex-1 overflow-hidden h-full w-full">
          <AppSidebar />
          <Layout />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
