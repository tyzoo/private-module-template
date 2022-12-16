# Private NPM Package Boilerplate
## by [@tyzoo](https://github.com/tyzoo)/[private-module-template](https://github.com/tyzoo/private-module-template)

A boilerplate for creating a private npm package, including Typescript support and Github Actions for building, deploying, and publishing. Also features automatic patch version increments.

## Getting Started

### Use this template

To create a new private repository using this template, follow these steps:

1. Click the [Use This Template](https://github.com/tyzoo/private-module-template/generate) button.
2. Follow the prompts to create a new repository.

### GitHub Setup

1. Create a new [Personal Access Token](https://github.com/settings/tokens) with the following scopes: `admin:repo_hook`, `repo`, `workflow`, `write:packages`.
2. Go to the repository's [Settings > Secrets](https://github.com/tyzoo/<your-github-username>/<new-module-name>/settings/secrets/actions) and add the `TOKEN` variable to the Github action secrets. Also be sure to add the following variables: `GH_EMAIL` and `GH_USERNAME`.

### Git Setup
1. From the root of the module, run `rm -rf .git` to remove the existing git repository, then run `git init` to create a new one.
2. Run `yarn run login` or `npm run login` and provide your `<your-github-username>`, `NODE_AUTH_TOKEN`, and email `<your-email>`. This will connect your local git to your GitHub account.

### Deploying a Patch

To quickly deploy a patch or change to your module, run the following command:

```
yarn commit "new feature"
```
or
```
npm run commit "new feature"
```

### Building with a Monorepo

To use this package as part of a monorepo, consider setting up a folder tree like the following:

```
├── app1
├── app2
├── packages
│   ├── module1
│   │   └── package.json, node_modules, .gitignore, .env, .git, etc.
│   └── module2
└──  package.json, node_modules, .gitignore, .env, .git, etc.
```

In the monorepo's root `package.json`, install the `concurrently` package, add the following script, and replace `<your-github-username>` with your GitHub username:

```ts
{
    "scripts": {
        ...,
        "add-submodule": "concurrently --names \"add-submodule\" --P \"git submodule add git@github.com:<your-github-username>/{1}.git packages/{1}\" --",
    }
}
```

Then, you can run the following commands to add a new module:

```
yarn add-submodule <new-module-name>
cd packages/<new-module-name>
yarn install
yarn build
```

## ⚠️ This is a template for a PRIVATE repository. ⚠️