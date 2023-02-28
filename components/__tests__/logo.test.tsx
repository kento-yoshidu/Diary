import { render, screen } from "@testing-library/react"

import Logo from "../logo"

describe("テスト", () => {
  it("test", () => {
    render(<Logo />)
    expect(screen.getByText("CUBE")).toBeTruthy()
  })
})
