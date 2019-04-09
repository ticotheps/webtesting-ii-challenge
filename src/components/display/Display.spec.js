import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("<Display />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Display />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders strikes', () => {
	  
		const { getByText, queryByText, debug } = render(<Display />); 
		
		// getByText(/strikes/i);
		expect(queryByText(/strikes/i)).not.toBeNull();
    });
    
    it('renders balls', () => {
	  
		const { getByText, queryByText, debug } = render(<Display />); 
		
		// getByText(/balls/i);
		expect(queryByText(/balls/i)).not.toBeNull();
	});
});