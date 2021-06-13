import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ActualTime from "../../app/javascript/components/ActualTime"
import TokyoTime from "../../app/javascript/components/TokyoTime"

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
});
