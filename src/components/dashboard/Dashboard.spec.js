import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Dashboard />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	// it('renders strikes', () => {
	  
	// 	const { getByText, queryByText, debug } = render(<Display />); 
		
	// 	// getByText(/hello World/i);
	// 	expect(queryByText(/strikes/i)).not.toBeNull();
	//   });
});