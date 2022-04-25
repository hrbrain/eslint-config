# How to contribute

Hello, we are hrbrain team.  
This library is designed for internal use by HRBrain, but contributions are always welcome.

## Setup

We use yarn for the package manager.

```bash
yarn
```

## Structure

### libs

Edit this directory files when you want to add preset or config.

### tests

Please add or chenge spec file when you change libs directory.

### sandbox

If you want to check with prettier cli, you can do that:

```bash
yarn gen:sandbox
```

And then create some files.

Finally, run this:

```bash
yarn sandbox
```

## Sending PR

PR title must follow [Conventional Commits 1.0.0
](https://www.conventionalcommits.org/en/v1.0.0/).
ex) feat: add vue preset
