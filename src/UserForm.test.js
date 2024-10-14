import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and button', () => { 
    // render the component
    render(<UserForm />)
    // Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    // Assertion - make sure the component is doing what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
})

test("it calls onUserAdd when the form is submitted", () => {
	render(<UserForm />);

	const [nameInput, emailInput] = screen.getAllByRole("textbox");

	user.click(nameInput);
	user.keyboard("jane");

	user.click(emailInput);
	user.keyboard("jane@example.com");
});