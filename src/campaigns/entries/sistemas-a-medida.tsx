import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SistemasAMedida from "../pages/SistemasAMedida";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SistemasAMedida />
  </StrictMode>
);
