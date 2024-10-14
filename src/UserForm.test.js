import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and button", () => {
	// render the component
	render(<UserForm onUserAdd={() => {}} />);
	// Manipulate the component or find an element in it
	const inputs = screen.getAllByRole("textbox");
	const button = screen.getByRole("button");
	// Assertion - make sure the component is doing what we expect it to do
	expect(inputs).toHaveLength(2);
	expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
	const mock = jest.fn();

	render(<UserForm onUserAdd={mock} />);

	const [nameInput, emailInput] = screen.getAllByRole("textbox");

	await user.click(nameInput);
	await user.keyboard("jane");

	await user.click(emailInput);
	await user.keyboard("jane@example.com");

	const button = screen.getByRole("button");

	await user.click(button);

	expect(mock).toHaveBeenCalled();
	expect(mock).toHaveBeenCalledWith({
		name: "jane",
		email: "jane@example.com",
	});
});
