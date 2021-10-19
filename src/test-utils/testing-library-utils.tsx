import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import AppContext from "../contexts/AppContext";

const renderWithContext = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AppContext, ...options });

export * from "@testing-library/react";

export { renderWithContext as render };
