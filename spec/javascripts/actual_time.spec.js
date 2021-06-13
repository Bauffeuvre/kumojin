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

  const expected = /The actual time is : (0?[1-9]|1[0-2])\/(0?[1-9]|1[0-9]|2[0-9]|3(0|1))\/\d{4}, ((1[0-2]|0?[1-9]):([0-5][0-9]):([0-5][0-9])) ?([AP][M])./;

  expect(container.textContent).toMatch(expected);
}

it("renders the actual date in tokyo", () => {
  act(() => {
    render(<TokyoTime />, container);
  });

  const expected = /In tokyo, it is : (0?[1-9]|1[0-2])\/(0?[1-9]|1[0-9]|2[0-9]|3(0|1))\/\d{4}, ((1[0-2]|0?[1-9]):([0-5][0-9]):([0-5][0-9])) ?([AP][M])./;

  expect(container.textContent).toMatch(expected);
);
