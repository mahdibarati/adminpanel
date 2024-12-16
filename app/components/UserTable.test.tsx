import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserTable from "./UserTable";

jest.mock("../../services/api", () => ({
  get: jest.fn().mockResolvedValue({
    data: [{ id: "1", name: "John Doe", email: "john@example.com" }],
  }),
}));

describe("UserTable Component", () => {
  it("renders users correctly", async () => {
    render(<UserTable />);

    const userName = await screen.findByText("John Doe");
    expect(userName).toBeInTheDocument();
  });
});
