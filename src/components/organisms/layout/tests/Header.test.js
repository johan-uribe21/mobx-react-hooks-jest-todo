import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "../Header";

test("renders 'Trello Clone Header Bar'", () => {
  const { getByText } = render(<Header />);
  const divElement = getByText("Trello Clone Header Bar");
  expect(divElement).toBeInTheDocument();
});

test("Header matches snapshot", () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
