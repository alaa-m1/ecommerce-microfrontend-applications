import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const mount = (
  el: HTMLElement,
  { onNavigate }: { onNavigate?: () => void }
) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

if (process.env.NODE_ENV === "development") {
  const divEl = document.getElementById("auth-root") as HTMLElement;
  if (divEl) {
    mount(divEl, {});
  }
}

export { mount };
