import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";
import Display from "../display/Display";

afterEach(cleanup);

describe("<Dashboard />", () => {
    
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Dashboard />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

    it("displays an updated 'strikes' count when the 'Strike' <button> is clicked", () => {
        const { getByText } = render(<Display />);
    
        const button = getByText(/strike/i);
    
        fireEvent.click(button);
        getByText(/strikes/i);
    });

    it("displays an updated 'strikes' & 'balls' count when the 'Ball' <button> is clicked", () => {
        const { getByText } = render(<Display />);
    
        const button = getByText(/ball/i);
    
        fireEvent.click(button);
        getByText(/strikes/i);
        getByText(/balls/i);
    });

    it("displays an updated 'strikes' count when the 'Foul' <button> is clicked", () => {
        const { getByText } = render(<Display />);
    
        const button = getByText(/foul/i);
    
        fireEvent.click(button);
        getByText(/strikes/i);
    });

    it("displays an updated 'strikes' & 'balls' count when the 'Hit' <button> is clicked", () => {
        const { getByText } = render(<Display />);
    
        const button = getByText(/hit/i);
    
        fireEvent.click(button);
        getByText(/strikes/i);
        getByText(/balls/i);
    });
});