import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App components", () => {
  const { getByText } = render(<App />);
});
