import Popover from "../Popover";
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve("src/index.html"), "utf8");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let dom;

beforeAll(() => {
  dom = new JSDOM(html, { runScripts: "dangerously" });
});

jest.setTimeout(30000);
describe("Popover work", () => {
  test("Popover adding", async () => {
    const button = dom.window.document.querySelector(".button");
    const popoverFactory = new Popover();
    button.dispatchEvent(new dom.window.Event("click"));
    setTimeout(()=>{
        expect(popoverFactory._popovers.length).toBe(1);
    }, 2000);
  });
  test("Popover removing", () => {
    const button = dom.window.document.querySelector(".button");
    const popoverFactory = new Popover();
    button.dispatchEvent(new dom.window.Event("click"));
    button.dispatchEvent(new dom.window.Event("click"));
    setTimeout(()=>{
        expect(popoverFactory._popovers.length).toBe(0);
    }, 2000);
  });
});
