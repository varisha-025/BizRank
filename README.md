# BizRank

![](BizRankLogo.png)

A web application for rating the small businesses thriving across the internet. It also allows users to mark their favourite businesses, share them with their friends and family, enjoy the ongoing sale and set a reminder of the upcoming sale on their favourite brands.

- [Tech stack](#Tech-stack)
- [Want to contribute](#Want-to-contribute)
- [Standard Commit Messages](#Standard-Commit-Messages)
- [Before making PR](#Before-making-PR)
- [Local Setup](#Local-Setup)
- [Backend setup](#Backend-setup)
- [Frontend setup](#Frontend-setup)

## Tech stack

- **Frontend:** Single Page Application using [React](https://reactjs.org/)
- **Server:** [Node.js](https://nodejs.org/en/) for the server.
  <!-- - **PullRequest validation:** [Github Actions](https://github.com/features/actions) to do automated PR validation by running tests and linter -->
  <!-- - **Version Control and Hosting:** [Git](https://git-scm.com/) for Source Code Management and [Github](https://github.com) for hosting. -->

<!-- ## Prerequisites for Setup

Create an OAuth2 Client

1. Go to the [Google Cloud Platform Console](https://console.cloud.google.com/)
2. From the projects list, select a project or create a new one
3. If the APIs & services page isn't already open, open the console left side menu and select APIs & services
4. On the left, click Credentials
5. Click New Credentials, then select OAuth client ID
6. Select `Web application` in the Application type
7. Give a name to the application
8. In Authorized Javascript origins add `http://localhost:3000`
9. In Authorized redirect URIs add `http://localhost:3000/login/redirect`
10. Click on Create button
11. Note Client ID and Client Secret -->

## Want to contribute?

### Standard Commit Messages

This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Please follow these steps to ensure your
commit messages are standardized:

- Commit messages should have this format:
  `<type>[optional scope]: <description>`
- Type should be `fix`(if fixed some bug), `feat`(if added new feature), `docs`(changes in documentation) or `test`(added new tests)
- Scope should be `frontend` or `backend` or `global` if your changes affects both.
- Description should be concise.
- Example: `docs(global): CONTRIBUTING.md added`

> Note: All the commits should be made from the root directory of the repository

### Before making PR

- Run `npm run lint` for checking lint errors.
- Run `git fetch upstream` & `git rebase upstream/master` to fetch updated codebase into your local repository before creating any new branch.
- Run `git checkout -b <your-branch-name>`

## Local Setup

- Fork and clone the repository.
- Add remote upstream `git remote add upstream https://github.com/varisha-025/BizRank.git`

### Backend setup

- Run `cd server`
- Run `npm install` to install all dependencies.
- Run `node index.js` to start server.

### Frontend setup

- Run `cd client`
- Run `npm install` to install all dependencies.
- Run `npm start` to start the server and visit [site](http://localhost:1337).
