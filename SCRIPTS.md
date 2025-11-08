# Available Scripts

This document outlines the various scripts available in this project, providing a quick reference for common development and maintenance tasks.

<!-- doc-gen SCRIPTS -->
| Script | Command | Line |
| -------- | -------- | -------- |
| `docs` | `npx markdown-magic@3.7.0 **/*.md -c md.config.js` | [7](./package.json#L7) |
| `format` | `prettier --write .` | [8](./package.json#L8) |
| `lint` | `eslint . --ext .js,.jsx,.ts,.tsx --fix` | [9](./package.json#L9) |
| `precommit` | `npm run docs && npm run lint && npm run format` | [10](./package.json#L10) |
| `test` | `jest --passWithNoTests` | [6](./package.json#L6) |
<!-- end-doc-gen -->
