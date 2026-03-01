const axios = require("axios");
const { execSync } = require("child_process");
const fs = require("fs");

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

Based on the following git diff, generate an updated README for the project.
Keep it clear and professional.

Git Diff:
${diff}

Return only the full updated README content.
`;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const updatedReadme = response.data.choices[0].message.content;

    fs.writeFileSync("README.md", updatedReadme);

    execSync("git config user.name 'ai-doc-bot'");
    execSync("git config user.email 'bot@example.com'");
    execSync("git add README.md");
    execSync("git commit -m 'AI: Updated documentation'");
    execSync("git push");

    console.log("README updated successfully.");
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

run();