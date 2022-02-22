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

## Scripts

Start the app in dev mode:

```
npm run dev
```

Start the test runner:

```
npm test
```

Run all tests and generate a coverage report:

```
npm run test:coverage
```

Start Storybook:

```
npm run storybook
```

Lint the code:

```
npm run lint
```

Check the code formatting:

```
npm run format:check
```

Format the code using `prettier`:

```
npm run format
```

Extract embedded English strings ready for translation:

```
npm run intl:extract
```
