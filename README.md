# typescript-webapp-devcontainer

This project is a template that allows you to quickly get started with a Typescript web application using a devcontainer. It is setup to allow you to use all the features of VS Code without having to use the browser debugger or code-editor. It can also be used without devcontainers, or directly via GitHub via CodeSpaces.

## Development Setup

### Using a VS Code Dev Container

Note that this is common infrastructure if you use devcontainers on your system for development and only needs to be installed *once* for *any number* of devcontainer-enabled repositories you want to use.

*If you haven't used devcontainers,  you'll be pleasantly surprised at how flexible, seamless and clean they make even the most complicated dev setup. I really recommend you check this out, it'll change your everything about how you think of dev environments and setup.*

1. Install [Docker](https://www.docker.com/get-started) on your machine if you haven't already.
2. Install [VS Code](https://code.visualstudio.com/download "Install VS Code")
3. Install the VS Code [Dev containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
4. Clone the repository (or use this template to create your own project):

   ```bash
   git clone https://github.com/aniongithub/typescript-webapp-devcontainer.git
   ```

   or (if you created your own project from this template)

   ```bash
   git clone https://github.com/your-username/project-name.git
   ```
5. Open the project in Visual Studio Code.
6. When prompted, click on the "Reopen in Container" button in the bottom-right corner of the editor. You can also use the Command Palette `(Ctrl/Cmd+Shift+P)` and type/choose `Rebuild and Reopen in Container `

   | ![1716436031338](image/README/1716436031338.png) | ![1716435968856](https://vscode-remote+dev-002dcontainer-002b7b22686f737450617468223a222f686f6d652f616e692f50726f6a656374732f74687265656a732d706c617967726f756e64222c226c6f63616c446f636b6572223a66616c73652c22636f6e66696746696c65223a7b22246d6964223a312c22667350617468223a222f686f6d652f616e692f50726f6a656374732f74687265656a732d706c617967726f756e642f2e646576636f6e7461696e65722f646576636f6e7461696e65722e6a736f6e222c2265787465726e616c223a2266696c653a2f2f2f686f6d652f616e692f50726f6a656374732f74687265656a732d706c617967726f756e642f2e646576636f6e7461696e65722f646576636f6e7461696e65722e6a736f6e222c2270617468223a222f686f6d652f616e692f50726f6a656374732f74687265656a732d706c617967726f756e642f2e646576636f6e7461696e65722f646576636f6e7461696e65722e6a736f6e222c22736368656d65223a2266696c65227d7d.vscode-resource.vscode-cdn.net/workspaces/threejs-playground/image/README/1716435968856.png) |
   | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
7. Wait for the devcontainer to build. This might take a few minutes depending on your internet connection.
   ![1716436169967](image/README/1716436169967.png)
8. When the devcontainer is ready, you can use `Ctrl/Cmd+Shift+B` (choose `npm:build`) to build the project
9. Press `F5` to launch it. A new browser window will open, showing you a rotating green cube on a sky blue background.
10. You can now use breakpoints in VS Code or setup the default build task to be `npm:watch` if you want any changes to automatically be compiled and available in the debug browser. Note that you may need to press `Shift+F5` to force the browser to refresh any changes.

### Github CodeSpaces

*TODO*

### Non-Devcontainer Based Development

1. Clone the repository:

   ```bash
   git clone https://github.com/aniongithub/typescript-webapp-devcontainer.git
   ```

   or (if you created your own project from this template)

   ```bash
   git clone https://github.com/your-username/project-name.git
   ```
2. Install the required dependencies:

```bash
   cd project-name
   npm install
```

3. Install the recommended extensions (from `.vscode/extensions.json`)
   ![1716437904187](image/README/1716437904187.png)
4. Press `F5` to launch the debugger. A new browser window will open, showing you a rotating green cube on a sky blue background.
   ![1716439109216](image/README/1716439109216.png)
5. You can now use breakpoints in VS Code or setup the default build task to be `npm:watch` if you want any changes to automatically be compiled and available in the debug browser. Note that you may need to press `Shift+F5` to force the browser to refresh any changes.

## License

This project is licensed under the [MIT License](LICENSE).
