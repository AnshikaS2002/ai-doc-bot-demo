const axios = require("axios");
const { execSync } = require("child_process");

async function run() {
  try {
    // Get latest commit diff
    const diff = execSync("git diff HEAD~1 HEAD").toString();

    if (!diff) {
      console.log("No changes detected.");
      return;
    }

    const prompt = `
You are a documentation assistant.

Based on the following git diff, generate updated project documentation
in CLEAN HTML format (no markdown).

Use proper <h1>, <h2>, <p>, <ul>, <li> tags.

Git Diff:
${diff}

Return ONLY valid HTML content.
`;

    // 🔵 Call Gemini
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      }
    );

    const updatedHtml =
      geminiResponse.data.candidates[0].content.parts[0].text;

    console.log("Generated HTML from Gemini.");

    // 🔵 Fetch current Confluence page
    const pageResponse = await axios.get(
      `${process.env.CONFLUENCE_BASE_URL}/wiki/rest/api/content/${process.env.CONFLUENCE_PAGE_ID}?expand=version`,
      {
        auth: {
          username: process.env.CONFLUENCE_EMAIL,
          password: process.env.CONFLUENCE_API_TOKEN
        }
      }
    );

    const currentVersion = pageResponse.data.version.number;
    const pageTitle = pageResponse.data.title;

    console.log("Current Confluence version:", currentVersion);

    // 🔵 Update Confluence page
    await axios.put(
      `${process.env.CONFLUENCE_BASE_URL}/wiki/rest/api/content/${process.env.CONFLUENCE_PAGE_ID}`,
      {
        id: process.env.CONFLUENCE_PAGE_ID,
        type: "page",
        title: pageTitle,
        version: { number: currentVersion + 1 },
        body: {
          storage: {
            value: updatedHtml,
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

    console.log("Confluence page updated successfully 🚀");

  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

run();