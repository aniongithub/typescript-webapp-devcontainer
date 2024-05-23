# typescript-webapp-template

This project is a template that allows you to quickly get started with a Typescript web application (optionally) using a devcontainer. It is setup to allow you to use all the features of VS Code without having to use the browser debugger or code-editor. It can also be used without devcontainers, or directly via GitHub via CodeSpaces.

## Development Setup

### Using a VS Code Dev Container

Note that this is common infrastructure if you use devcontainers on your system for development and only needs to be installed *once* for *any number* of devcontainer-enabled repositories you want to use.

*If you haven't used devcontainers,  you'll be pleasantly surprised at how flexible, seamless and clean they make even the most complicated dev setup. I really recommend you check this out, it'll change your everything about how you think of dev environments and setup.*

1. Install [Docker](https://www.docker.com/get-started) on your machine if you haven't already.
2. Install [VS Code](https://code.visualstudio.com/download "Install VS Code")
3. Install the VS Code [Dev containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
4. Clone the repository (or use this template to create your own project):

   ```bash
   git clone https://github.com/aniongithub/typescript-webapp-template.git
   ```

   or (if you created your own project from this template)

   ```bash
   git clone https://github.com/your-username/project-name.git
   ```
5. Open the project in Visual Studio Code.
6. When prompted, click on the "Reopen in Container" button in the bottom-right corner of the editor. You can also use the Command Palette `(Ctrl/Cmd+Shift+P)` and type/choose `Rebuild and Reopen in Container `

   | ![1716436031338](image/README/1716436031338.png) | ![1716441426560](image/README/1716435968856.png) |
   | ---------------------------------------------- | ---------------------------------------------- |
7. Wait for the devcontainer to build. This might take a few minutes depending on your internet connection.
   ![1716436169967](image/README/1716436169967.png)
8. When the devcontainer is ready, you can use `Ctrl/Cmd+Shift+B` (choose `npm:build`) to build the project
9. Press `F5` to launch it. A new browser window will open, showing you a rotating green cube on a sky blue background.
10. You can now use breakpoints in VS Code or setup the default build task to be `npm:watch` if you want any changes to automatically be compiled and available in the debug browser. Note that you may need to press `Shift+F5` to force the browser to refresh any changes.

### Github CodeSpaces

1. Create a new project based on this template or use this repository
2. Choose the `Code` dropdown and click `Create codespace on main`
   ![1716440722277](image/README/1716440722277.png)
3. You will see Github is creating a Codespace to run this project
   ![1716440931112](image/README/1716440931112.png)
4. When the CodeSpace is ready, you can use `Ctrl/Cmd+Shift+B` (choose `npm:build`) to build the project
5. Press `F5` to launch it. Note that you can only launch the project using the `Server` configuration as we cannot launch a client-side browser from CodeSpaces. Instead, use the `Open in Browser` button from the popup as shown below.
   ![1716441062199](image/README/1716441062199.png)
6. You can now use breakpoints in VS Code or setup the default build task to be `npm:watch` if you want any changes to automatically be compiled and available in the browser window/tab you opened. Note that you may need to press `Shift+F5` to force the browser to refresh any changes.

### Non-Devcontainer Based Development

1. Clone the repository:

   ```bash
   git clone https://github.com/aniongithub/typescript-webapp-template.git
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
