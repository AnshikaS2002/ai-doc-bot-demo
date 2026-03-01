const axios = require("axios");
const fs = require("fs");

async function publish() {
  try {
    const html = fs.readFileSync("docs/generated-doc.html", "utf8");

    const page = await axios.get(
      `${process.env.CONFLUENCE_BASE_URL}/wiki/rest/api/content/${process.env.CONFLUENCE_PAGE_ID}?expand=version`,
      {
        auth: {
          username: process.env.CONFLUENCE_EMAIL,
          password: process.env.CONFLUENCE_API_TOKEN
        }
      }
    );

    const version = page.data.version.number;
    const title = page.data.title;

    await axios.put(
      `${process.env.CONFLUENCE_BASE_URL}/wiki/rest/api/content/${process.env.CONFLUENCE_PAGE_ID}`,
      {
        id: process.env.CONFLUENCE_PAGE_ID,
        type: "page",
        title: title,
        version: { number: version + 1 },
        body: {
          storage: {
            value: html,
            representation: "storage"
          }
        }
      },
      {
        auth: {
          username: process.env.CONFLUENCE_EMAIL,
          password: process.env.CONFLUENCE_API_TOKEN
        }
      }
    );

    console.log("Confluence updated successfully.");

  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

publish();