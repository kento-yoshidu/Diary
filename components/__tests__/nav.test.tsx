import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Nav from "../nav"

describe("Test Nav Component", () => {
  it("test", async () => {
    render(<Nav />)

    // await userEvent.click(screen.getByRole("button"))

    screen.debug()
  })
})
