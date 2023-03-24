# Next.js Playground

This is a playground for Next.js features

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

**Apps**

- `nextjs13`: a [Next.js 13](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `nextjs13 app router`: a [Next.js 13](https://nextjs.org/) app that uses the app router with [Tailwind CSS](https://tailwindcss.com/)

**Packages**

- `contentful`: a package for pulling blog data from [Contentful](https://www.contentful.com/)
- `dayjs`: a package that uses the date utility library [Day.js](https://day.js.org/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by all Next.js apps
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your `tailwind.config.js` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Getting started

1. Make sure you've created a `.env` file with all the listed variables in the `.env.example` file
2. Run the following commands to get the project running:

```sh
pnpm install
pnpm dev
```

## Running a build

Run the following commands to get a build running:

```sh
pnpm install
pnpm build
```

If deploying on Vercel, you can also enable [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share builds across your team and CI
