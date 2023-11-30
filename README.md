# mitosis-starter-demo

This is a starter project intended to show developers how to use `Mitosis` to transoform `Mitosis JSX` to other framework code, such as Vue, React, Solid, etc.

## Prerequisites

Run `pnpm install` to install the dependencies.

## Configuring Mitosis build condig

By modifying `mitosis.config.js`, we could easily set up the target platforms and customize other building options in `Mitosis`.

The configuration doc can be read [here](https://github.com/BuilderIO/mitosis/blob/main/docs/configuration.md).

```javascript
// mitosis.config.js
/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
    // ... other mitosis configs
  targets: ['solid', 'react', 'vue3'],
};
```

## Running commands

- Build the project by `Mitosis`

```shell
pnpm build
```

After running this command, the bundles files will be generated at the `dist` directory. 

In the `dist` directory, you will see the `<target>` directories, such as `react`, `solid`, which were earlier configurated at `mitosis.config.js`.

In the `dist/<target>` directory, you will see the generated source code in specified framework, and you can move them to a frontend framework project to start developing.
