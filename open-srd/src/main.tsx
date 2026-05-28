import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import { DatabaseProvider } from './context/DatabaseContext.js'
import { SidebarProvider } from './components/ui/sidebar.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DatabaseProvider>
        <SidebarProvider defaultOpen={false}>
          <App />
        </SidebarProvider>
      </DatabaseProvider>
    </BrowserRouter>
  </StrictMode>
)