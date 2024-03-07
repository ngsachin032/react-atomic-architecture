# Zeta CMS UI Library

## Installation & Startup

### Clone & Run as a React App

For development purposes, you can run the app as a React app:

```bash
git clone git@github.comcast.com:Corp-Comm/zeta-cms-ui.git
cd zeta-cms-ui
npm install
npm start
```

### Install as a Library

If you are using this as a library, run `npm install` in your current project:

```bash
npm i git@github.comcast.com:Corp-Comm/zeta-cms-ui.git
```

From there, you can import any components available from within the library:

```js
import { MediaSectionGrid } from 'zeta-cms-ui'
```

Internally, you can refer to the `/components` or `/middleware` directories:

```js
import { LoadingBackdrop, StandardGrid } from 'components'
import { useListVideos } from 'middleware'
```

## Structure

Within the `src` directory resides a number of directories that provide a place for different functionality:

* `components` atomic components directory (molecules)
* `composites` atomic components directory (organisms)
* `elements` atomic components directory (atoms)
* `inc` additional includes
* `middleware` redux/data query & manipulation
* `pages` atomic components directory (pages)
* `templates` atomic components directory (templates)
* `theme` global styling

### Component Structure

The React components within `zeta-cms-ui` are structured based on the [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) concept:

* Elements - atoms
* Components - molecules
* Composites - organisms
* Templates
* Pages

## Building

> ToDo: add documentation on building once the build process is defined and implemented

## Scaffolding

When creating new React components, there is a built-in scaffolding system to help you generate your files.

The most basic way is to run the `scaffold` command. You will then be guided by the prompts to select a scaffold type and any additional information that's needed:

```bash
# run the basic scaffolding CLI tool
npm run scaffold
```

### Components

To generate a new component, run:

```bash
# run the component scaffold
npm run component:create

# run the component scaffold without a prompt
npm run component:create Example

# run the component scaffold and put the component in a sub-directory
npm run component:create modals/ExampleModal
```

> Note: when naming the component ("Example" or "ExampleModal" in the above examples), use `PascalCase`. It will be converted to `kebab-case` for filenames. 

### Pages

To generate a new page, run:

```bash
# run the page scaffold
npm run page:create

# run the page scaffold without a prompt
npm run page:create Example
```

> Note: this will not only create the page files, but also add it into the `src/pages/index.ts` and `src/apps/cms-interface/cms-interface.tsx` files

## Linting

Linting is done using [StandardJS](https://standardjs.com/). It is automatically configured, so no need for linting configurations. 

To check for linting errors, run:

```bash
npm run lint
```

If you want to automatically fix linting errors, run:

```bash
npm run lint:fix
```

## Storybook

> Note: Storybook implementation not yet complete

```bash
npm run storybook
```

## Additional Notes

### Included Libraries

* [React](https://react.dev/)
* [Material UI](https://mui.com/)
* [Storybook](https://storybook.js.org/)
* [Plop](http://plopjs.com/)
* [StandardJS](https://standardjs.com/)
