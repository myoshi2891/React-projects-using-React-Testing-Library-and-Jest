import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
	const users = [
		{ name: "John Doe", email: "john.doe@example.com" },
		{ name: "Jane Doe", email: "jane.doe@example.com" },
	];
	render(<UserList users={users} />);

	// screen.logTestingPlaygroundURL();
	const rows = within(screen.getByTestId("users")).getAllByRole("row");

	expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {});
