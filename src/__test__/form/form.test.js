import FormComp from "../../components/forms/form";
import {fireEvent, render, screen} from "@testing-library/react"

describe("feedback form", () => {
    beforeAll(() => {
        window.alert = jest.fn()
    })

    test("submission is disabled if score is lower than 5 and there is no feedback", () => {
        const handleSubmit = jest.fn(); //mock funtion
        render(<FormComp onSubmit={handleSubmit} />) // render the form comopnent

        const rangeInput = screen.getByLabelText(/rate/); // get the label which text is rate
        fireEvent.change(rangeInput, {target: {value:"4"}});

        const submitButton = screen.getByRole("button", {name:"submit feedback"}); // get button element which name is submit feedback
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    })
})