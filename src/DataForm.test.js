import { render, screen } from "@testing-library/react";
import DataForm from "./DataForm";

test("selecting different elements", () => {
	render(<DataForm />);

	const elements = [];

	for (let element of elements) {
		expect(element).toBeInTheDocument();
	}
});
