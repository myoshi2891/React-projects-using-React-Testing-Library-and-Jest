import { render, screen } from "@testing-library/react";
import DataForm from "./DataForm";

test("selecting different elements", () => {
	render(<DataForm />);

	const elements = [
		screen.getByRole("button"),
		screen.getByLabelText("Email"),
		screen.getByPlaceholderText("Red"),
		screen.getByText("Enter Data"),
		screen.getByDisplayValue("asdf@asdf.com"),
		screen.getByAltText("data"),
		screen.getByTitle(/ready to submit/i),
		screen.getByTestId("image wrapper"),
	];

	for (let element of elements) {
		expect(element).toBeInTheDocument();
	}
});
