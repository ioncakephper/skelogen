# Contributing to skelogen

We welcome contributions to skelogen! To ensure a smooth and effective collaboration, please follow these guidelines.

## How to Contribute

We expect all contributors to adhere to our [Code of Conduct](RULES_OF_CONDUCT.md).

1.  **Fork the repository:** Start by forking the skelogen repository to your GitHub account.
2.  **Clone your fork:** Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/YOUR_USERNAME/skelogen.git
    ```
3.  **Create a new branch:** Before making any changes, create a new branch for your feature or bug fix.
    ```bash
    git checkout -b feature/your-feature-name
    ```
    or
    ```bash
    git checkout -b bugfix/issue-description
    ```
4.  **Make your changes:** Implement your feature or fix the bug. Ensure your code adheres to the project's coding style and conventions.
5.  **Write tests:** If you're adding new functionality, please write unit and/or integration tests to cover your changes. If you're fixing a bug, add a test that reproduces the bug and then passes with your fix.
6.  **Run tests:** Make sure all existing tests pass, along with your new tests.
    ```bash
    npm test
    ```
7.  **Commit your changes:** Write clear and concise commit messages.
    ```bash
    git commit -m "feat: Add new feature"
    ```
    or
    ```bash
    git commit -m "fix: Resolve issue #123"
    ```
8.  **Push to your fork:** Push your local branch to your forked repository on GitHub.
    ```bash
    git push origin feature/your-feature-name
    ```
9.  **Create a Pull Request:** Go to the original skelogen repository on GitHub and open a new Pull Request. Provide a detailed description of your changes, why they are needed, and any relevant information.

## Code Style

Please adhere to the existing code style. We use ESLint and Prettier to maintain code consistency. Ensure you run linting and formatting checks before submitting your pull request.

```bash
npm run lint
npm run format
```

## Reporting Bugs

If you find a bug, please open an issue on GitHub. Provide a clear and concise description of the bug, steps to reproduce it, and expected behavior.

## Feature Requests

We welcome feature requests! Open an issue on GitHub to suggest new features. Describe the feature, its potential benefits, and any use cases.

Thank you for contributing to skelogen!
