import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";

describe("<App />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Take Me Out to the BALLLLLLLLLLS Game!', () => {
		// const helpers = render(<App />); 
		// the render method returns an object that gives you methods
		// to help you find things in the DOM.

		// console.log('helpers', helpers);
	  
		const { getByText, queryByText, debug } = render(<App />); 
		
		// getByText(/hello World/i);
		expect(queryByText(/take me out to the balllllllllls game/i)).not.toBeNull();
	  });
});
