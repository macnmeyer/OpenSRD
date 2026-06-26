import Header from "./components/header/Header.js"
import "./App.css"
import Layout from "./layouts/Layout.js";
import Footer from "./components/footer/Footer.js";
import { AppSidebar } from "./components/app-sidebar/AppSidebar.js";
import { Outlet } from "react-router";




function App() {

  return (
    <>
      <main className="flex flex-col items-center min-h-svh w-full">
        <Header />
        <div className="layout-wrapper flex flex-col flex-1 w-full h-full p-4">
          <Layout />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
