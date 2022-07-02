# typescript-action [![ts](https://github.com/int128/typescript-action/actions/workflows/ts.yaml/badge.svg)](https://github.com/int128/typescript-action/actions/workflows/ts.yaml)

This is a template of TypeScript action.
Inspired from https://github.com/actions/typescript-action.


## Features

- Ready to develop with the minimum configs
  - Yarn
  - Prettier
  - ESLint
  - tsconfig
  - Jest
- Automated continuous release
- Keep consistency of generated files
- Shipped with Renovate config


## Getting Started

Click `Use this template` to create a repository.

An initial release `v0.0.0` is automatically created by GitHub Actions.
You can see the generated files in `dist` directory on the tag.

Then checkout your repository and test it. Node.js is required.

```console
$ git clone https://github.com/your/repo.git

$ yarn
$ yarn test
```

Create a pull request for a change.

```console
$ git checkout -b feature
$ git commit -m 'Add feature'
$ gh pr create -fd
```

Once you merge a pull request, a new minor release (such as `v0.1.0`) is created.


### Stable release

When you want to create a stable release, change the major version in [release workflow](.github/workflows/release.yaml).

```yaml
      - uses: int128/release-typescript-action@v1
        with:
          major-version: 1
```

Then a new stable release `v1.0.0` is created.


## Specification

To run this action, create a workflow as follows:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: int128/typescript-action@v1
        with:
          name: hello
```

### Inputs

| Name | Default | Description
|------|----------|------------
| `name` | (required) | example input


### Outputs

| Name | Description
|------|------------
| `example` | example output


## Development

### Release workflow

When a pull request is merged into main branch, a new minor release is created by GitHub Actions.
See https://github.com/int128/release-typescript-action for details.

### Keep consistency of generated files

If a pull request needs to be fixed by Prettier, an additional commit to fix it will be added by GitHub Actions.
See https://github.com/int128/update-generated-files-action for details.

### Dependency update

You can enable Renovate to update the dependencies.
This repository is shipped with the config https://github.com/int128/typescript-action-renovate-config.
