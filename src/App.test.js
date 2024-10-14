import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can recieve a new user and show it on a list", async () => {
	render(<App />);

	const nameInput = screen.getByRole("textbox", {
		name: /name/i,
	});

	const emailInput = screen.getByRole("textbox", {
		name: /email/i,
	});
	const button = screen.getByRole("button");

	await user.click(nameInput);
	await user.keyboard("jane");
	await user.click(emailInput);
	await user.keyboard("jane@example.com");

	await user.click(button);

	// screen.debug();

	const name = screen.getByRole("cell", { name: "jane" });
	const email = screen.getByRole("cell", { name: "jane@example.com" });

	expect(name).toBeInTheDocument();
	expect(email).toBeInTheDocument();
});
