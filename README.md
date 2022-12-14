# PWA Text Editor (Sterling)

## ๐ Table of Contents

- [Project Description](#project-description) ๐ง

- [Tools](#tools) ๐ช

- [Installation](#installation) ๐พ

- [Usage](#usage) ๐

- [Contributing](#contributing) ๐จ๐ฝโ๐ป

- [Tests](#tests) ๐งช

- [License](#license) ๐

- [Questions](#questions) ๐ค

## Project Description

This application is a web text editor where a user can create notes or code snippets with or without an internet connection so that they can reliably retrieve them for later use. The integrated service worker and cache APIs ensure that the application will remain fully functional even without an active internet connection. This application allows the user to access visited pages even if the application is offline.

GitHub repository URL: https://github.com/OvernightSolo/pwa-text-editor-sterling

Deployed Heroku app: https://pwa-text-editor-sterling.herokuapp.com/

![Screenshot of deployed application](./client/src/images/Screenshot%202022-11-12%20133106.png)

## Tools

- Node.js
- Express.js
- IndexedDB
- PWA
- Heroku

## Installation

- Clone the repository
- Enter `npm install` into a command line in the project's root directory
- Enter `npm start`

## Usage

Type any code snippet or notes in the editor. The content will be saved in the IndexedDB when the window is unfocused. When you reopen the text editor after closing it, the content in the text editor will be retrieved from the IndexedDB.

If the Install button is clicked, the web application will be downloaded as an icon on your desktop.

## Contributing

There are no contribution guidelines for this application,

## Tests

There are no tests for this application,

## License

This app is not licensed.

## Questions

- [Visit my GitHub](https://github.com/OvernightSolo)
- Drop me a line at sterlingtx75@gmail.com with your questions.
- Contact me on Twitter

  <a href="https://twitter.com/RobertScott6114">
  <img alt="Twitter: RobertScott6114" src="https://img.shields.io/twitter/follow/RobertScott6114.svg?style=social" target="_blank" />
  </a>
