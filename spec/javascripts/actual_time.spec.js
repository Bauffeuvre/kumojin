import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ActualTime from "../../app/javascript/components/ActualTime"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the actual date", () => {
  act(() => {
    render(<ActualTime />, container);
  });
  expect(container.textContent).toBe(true);

  // act(() => {
  //   render(<ActualTime name="" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Jenny!");

  // act(() => {
  //   render(<Hello name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Margaret!");
});