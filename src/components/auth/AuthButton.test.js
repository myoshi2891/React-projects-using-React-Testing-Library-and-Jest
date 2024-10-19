import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

function renderComponent() {
	return render(
		<MemoryRouter>
			<AuthButtons />
		</MemoryRouter>
	);
}

describe("when user is not signed in", () => {
	createServer([
		{
			path: "/api/user",
			res: () => {
				return { user: null };
			},
		},
	]);
    
	test("sign in and sign up are visible", async () => {
		renderComponent();
		await screen.findAllByRole("link");
	});
	test("sign is not visible", async () => {
		renderComponent();
		await screen.findAllByRole("link");
	});
});

// describe("when user is signed in", () => {
// 	createServer([
// 		{
// 			path: "/api/user",
// 			res: () => {
// 				return { user: { id: 3, email: "test@example.com" } };
// 			},
// 		},
// 	]);

// 	test("sign in and sign up are not visible", async () => {
// 		renderComponent();
// 	});
// 	test("sign out is visible", async () => {
// 		renderComponent();
// 	});
// });
