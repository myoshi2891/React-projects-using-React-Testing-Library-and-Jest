import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

createServer([
	{
		path: "/api/user",
		res: () => {
			return { user: null };
		},
	},
]);
test("when user is not signed in, sign in and sign up are visible", async () => {
	console.log("Test 1");
});
test("when user is not signed in, sign is not visible", async () => {
	console.log("Test 2");
});

createServer([
	{
		path: "/api/user",
		res: () => {
			return { user: { id: 3, email: "test@example.com" } };
		},
	},
]);

test("when user is signed in, sign in and sign up are not visible", async () => {
	console.log("Test 3");
});
test("when user is signed in, sign out is visible", async () => {
	console.log("Test 4");
});
