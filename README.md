# Tailwind Demo

Loose clone of the MUI Kitchen Sink Demo but using Tailwind CSS.

- Vite and Vitest
- TypeScript
- TailwindCSS
- heroicons
- React Intl
- React Router 6
- Storybook with interactions
- Mock Service Worker
- Dark mode toggle
- English/Finnish language support
- Extensive tests that use stories as the units
- Storybook ESLint plugin
- `react-intl` ESLint plugin to enforce formatted strings
- `formatjs` babel plugin for automatic messages IDs.
- Prettier
- Formik
- Vite aliases

Note that this project uses `pnpm`.

## Scripts

Start the app in dev mode:

```
pnpm dev
```

Start the test runner:

```
pnpm test
```

Run all tests and generate a coverage report:

```
pnpm test:coverage
```

Start Storybook:

```
pnpm storybook
```

Lint the code:

```
pnpm lint
```

Check the code formatting:

```
pnpm format:check
```

Format the code using `prettier`:

```
pnpm format
```

Extract embedded English strings ready for translation:

```
pnpm intl:extract
```
