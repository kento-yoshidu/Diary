import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom/extend-expect'

import Accordion from "../accordion"

describe("Accordion test", () => {
  it("Rendering According Component", () => {
    render(<Accordion heading="dummy header">dummy text</Accordion>)
    expect(screen.getByRole("button")).toHaveTextContent("dummy header")
  })

  it("Close class is given to the div element", () => {
    render(<Accordion heading="dummy header">dummy text</Accordion>)
    expect(screen.getByTestId("div")).toHaveClass("close")
  })

  it("When the button is clicked, the open class is given", async () => {
    render(<Accordion heading="dummy header">dummy text</Accordion>)
    await userEvent.click(screen.getByRole("button"))
    expect(screen.getByTestId("div")).toHaveClass("open")
  })

  it("When the button is clicked, the close class is not given", async () => {
    render(<Accordion heading="dummy header">dummy text</Accordion>)
    await userEvent.click(screen.getByRole("button"))
    expect(screen.getByTestId("div")).not.toHaveClass("close")
  })
})
