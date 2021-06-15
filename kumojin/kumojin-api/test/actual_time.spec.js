import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ActualTime from "../src/components/ActualTime"

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

  const expected = /Local time:(MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY|SUNDAY)((1[0-2]|0?[1-9]):([0-5][0-9]):([0-5][0-9])) ([AP][M])(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (0[1-9]|1[0-9]|2[0-9]|3[0|1])(st|th|rd) \d{2}/;

  expect(container.textContent).toMatch(expected);
});
