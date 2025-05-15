import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {QueryClient , QueryClientProvider} from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');
  wb.addEventListener('activated', (event) => {
    console.log('Service worker activated:', event);
  });
  wb.register();
}

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
    <App />
    </QueryClientProvider>
  </StrictMode>
);
