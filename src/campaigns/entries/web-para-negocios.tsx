import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WebParaNegocios from "../pages/WebParaNegocios";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebParaNegocios />
  </StrictMode>
);
