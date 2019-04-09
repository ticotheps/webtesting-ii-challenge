import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";

afterEach(cleanup);

describe("<App />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders take me out to the balllllllllls game', () => {
	
		const { getByText, queryByText, debug } = render(<App />); 
		
		// getByText(/take me out to the balllllllllls game/i);
		expect(queryByText(/take me out to the balllllllllls game/i)).not.toBeNull();
	  });
});
