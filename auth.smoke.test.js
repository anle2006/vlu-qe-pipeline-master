const { login } = require("./auth");

test("Smoke Test - Login successfully", () => {
    expect(login("admin", "123")).toBe(true);
});
