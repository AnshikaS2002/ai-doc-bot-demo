const axios = require("axios");
const fs = require("fs");
const { execSync } = require("child_process");

async function run() {
  try {
    const diff = execSync("git diff HEAD~1 HEAD").toString();

    if (!diff) {
      console.log("No changes detected.");
      return;
    }

    const prompt = `
You are a documentation assistant.

Based on the following git diff, generate updated project documentation
in CLEAN HTML format.

Use proper <h1>, <h2>, <p>, <ul>, <li> tags.

Git Diff:
${diff}

Return ONLY valid HTML content.
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }]
      }
    );

    const html =
      response.data.candidates[0].content.parts[0].text;

    if (!fs.existsSync("docs")) {
      fs.mkdirSync("docs");
    }

    fs.writeFileSync("docs/generated-doc.html", html);

    console.log("Documentation generated successfully.");

  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
}

run();