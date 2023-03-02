import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

import Accordion from "../accordion"

describe("Accordion test", () => {
  it("Rendering according", () => {
    render(<Accordion heading="dummy header">dummy text</Accordion>)
    expect(screen.getByRole("button")).toHaveTextContent("dummy header")
  })

  it("Close class is given to the div element", () => {
    render(<Accordion heading="dummy header">dummy text</Accordion>)
    expect(screen.getByTestId("div")).toHaveClass("closesese")
  })
})
