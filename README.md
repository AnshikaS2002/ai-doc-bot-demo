# AI Doc Bot

AI Doc Bot is an automated documentation assistant that leverages the power of Google's Gemini AI to keep your project's documentation up to date. It monitors your repository for changes and automatically suggests documentation improvements via Pull Requests.

## Features

- **Automated Updates**: Uses Gemini AI to analyze code changes and generate corresponding documentation updates.
- **Pull Request Workflow**: Instead of committing directly to the main branch, the bot creates a structured Pull Request for human review.
- **Infinite Loop Protection**: Built-in checks ensure the bot does not trigger itself, preventing recursive action runs.
- **Secure Integration**: Utilizes GitHub Actions secrets for API key management.

## How It Works

The bot runs as a GitHub Action triggered by repository events. The workflow follows these steps:

1.  **Environment Setup**: Initializes a Node.js environment and checks out the repository.
2.  **AI Processing**: Runs the `ai-doc-bot.js` script, which interfaces with the Gemini API to generate documentation content based on the current state of the codebase.
3.  **PR Creation**: If changes are detected, the bot uses the `peter-evans/create-pull-request` action to open a new Pull Request with the branch name pattern `ai-doc-update-[run-number]`.

## Setup

### Prerequisites

- A Google Gemini API Key.
- GitHub Actions enabled on your repository.

### Configuration

1.  **Add Secret**: Add your Gemini API key to your repository secrets as `GEMINI_API_KEY`.
2.  **Permissions**: Ensure the workflow has the necessary permissions to write content and create pull requests. The workflow is pre-configured with:
    ```yaml
    permissions:
      contents: write
      pull-requests: write
    ```

## Workflow Details

The automation is defined in `.github/workflows/ai-doc-bot.yml`. It is designed to skip execution if the actor is `github-actions[bot]` to ensure stability and efficiency.

### Pull Request Metadata
- **Branch**: `ai-doc-update-${{ github.run_number }}`
- **Commit Message**: `AI: Update documentation via Gemini`
- **Title**: `AI Documentation Update`
- **Base Branch**: `main`

## Contributing

If you wish to modify the AI logic, please update the `ai-doc-bot.js` file. For workflow changes, modify the `.github/workflows/ai-doc-bot.yml` file.