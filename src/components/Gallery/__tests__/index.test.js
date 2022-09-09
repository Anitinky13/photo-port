import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";
afterEach(cleanup);
describe("Gallery is rendering", () => {
  it("renders", () => {
    render(<Gallery currentCategory={portrait} />);
  });
});
it("renders", () => {
  const { getByTestId } = render(<Gallery currentCategory={portrait} />);
  expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
});
