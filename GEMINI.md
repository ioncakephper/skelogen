# Project Overview for Gemini

This document provides an overview of the `skelogen` project, intended for use as instructional context for the Gemini CLI.

## Project Purpose

`skelogen` is a command-line interface (CLI) tool designed to automate project setup and management. Its primary goal is to simplify the creation of consistent project structures, essential configuration files, and initial documentation across various projects. This ensures consistency, reduces manual errors, and speeds up developer onboarding.

## Main Technologies

*   **Runtime:** Node.js
*   **Package Manager:** npm
*   **Testing Framework:** Jest
*   **Linting:** ESLint
*   **Code Formatting:** Prettier
*   **Documentation Generation:** markdown-magic
*   **Schema Validation:** AJV (based on `package.json` dependencies)
*   **YAML Parsing:** `yaml` (based on `package.json` dependencies)

## Architecture

`skelogen` operates as a CLI tool, likely taking commands and arguments to generate project skeletons based on predefined templates or configurations. The presence of `schemas/outline.schema.json` and `__outlines__/*.outline.yml` suggests a schema-driven approach for defining and validating project outlines or templates.

## Building and Running

### Installation

To install `skelogen` globally:

```bash
npm install -g skelogen
```

Alternatively, you can use `npx` to run `skelogen` without global installation:

```bash
npx skelogen <command>
```

### Usage

To generate a new project skeleton:

```bash
skelogen init <project-name>
```

Follow the interactive prompts to configure your new project.

### Available Scripts

The following scripts are defined in `package.json` for development and maintenance:

*   `npm test`: Runs unit tests using Jest.
*   `npm run docs`: Generates and updates documentation files using `markdown-magic`.
*   `npm run format`: Formats the codebase using Prettier.
*   `npm run lint`: Lints the codebase using ESLint to identify and fix code style issues.
*   `npm run precommit`: A pre-commit hook that runs `docs`, `lint`, and `format` to ensure code quality and consistency before commits.

## Development Conventions

*   **Testing:** The project uses Jest for unit testing. Test files are likely located alongside the source code or in a dedicated `__tests__` directory.
*   **Linting:** ESLint is used to enforce code style and identify potential issues. Configuration files include `eslint.config.js` and `.eslintrc.json`.
*   **Formatting:** Prettier is used for automatic code formatting, ensuring a consistent code style across the project. The configuration is in `.prettierrc.json`.
*   **Documentation:** Documentation is generated and managed using `markdown-magic`, configured via `md.config.js`.
*   **Contribution Guidelines:** Detailed guidelines for contributing to the project are available in `CONTRIBUTING.md`.
*   **Code of Conduct:** The project adheres to a Code of Conduct outlined in `RULES_OF_CONDUCT.md`.
*   **Project Structure:** An overview of the project's directory layout and organization can be found in `PROJECT_STRUCTURE.md`.
*   **Dependencies:** A detailed list of project dependencies and their purposes is in `DEPENDENCIES.md`.
