import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from 'axios';


import TokyoTime from "../src/components/TokyoTime"

jest.mock('axios');

describe('TokyoTime', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: {
        tokyo_time: "6/15/2021, 11:26:48 AM" 
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    
    act(() => {
      render(<TokyoTime />, container);
    });
    
    const expected = /Tokyo, Japan:(MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY|SUNDAY)((1[0-2]|0?[1-9]):([0-5][0-9]):([0-5][0-9])) ([AP][M])(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (0[1-9]|1[0-9]|2[0-9]|3[0|1])(st|th|rd) \d{2}/;
    
    await expect(container.textContent).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
});


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
