const { login } = require("./auth");

test("Login successfully", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Wrong password", () => {
    expect(login("admin", "999")).toBe(false);
});

test("Empty username", () => {
    expect(login("", "123")).toBe(false);
});

test("Empty password", () => {
    expect(login("admin", "")).toBe(false);
});

test("Wrong username", () => {
    expect(login("user", "123")).toBe(false);
});

test("Special character password", () => {
    expect(login("admin", "@#$")).toBe(false);
});

test("Locked account", () => {
    expect(login("locked", "123")).toBe(false);
});
