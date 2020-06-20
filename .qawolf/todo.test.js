const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("todo", async () => {
  await page.goto("http://todomvc.com/examples/react");
  await page.click('[placeholder="What needs to be done?"]');
  await page.type('[placeholder="What needs to be done?"]', "test");
  await page.press('[placeholder="What needs to be done?"]', "Enter");
  await page.type('[placeholder="What needs to be done?"]', "asdfsdf");
  await page.press('[placeholder="What needs to be done?"]', "Enter");
  await page.click(".toggle");
  await page.click("li:nth-of-type(2) .toggle");
  await page.click("text=Clear completed");
  await page.click('[placeholder="What needs to be done?"]');
  await page.type('[placeholder="What needs to be done?"]', "afsdsfd");
  await page.press('[placeholder="What needs to be done?"]', "Enter");
  await page.type('[placeholder="What needs to be done?"]', "sadfas");
  await page.press('[placeholder="What needs to be done?"]', "Enter");
  await page.click(".toggle");
  await page.click("text=Active");
  await page.click("text=All");
  await page.click("text=Completed");
  await page.click("text=Clear completed");
  await page.click("text=All");
});