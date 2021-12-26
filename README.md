## Preview URL
[Svelte-kit-fullcalendar](https://svelte-kit-fullcalendar.netlify.app/)
## Using the Project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# clone the project
git clone https://github.com/acidlake/sveltekit-fullcalendar.git

# install dev dependencies
pnpm i or npm i

# run the project
pnpm dev or npm run dev
```

## Alias in this projects

For us to work better we setup some aliases
- $Assets: path.resolve('./static/assets'),
- $Components: path.resolve('./src/lib/shared/components'),


## Environment Variables

Because we are using Vite, if you want to use .env append VITE_ at the begining of the env var.

```bash
# APP ENVIRONMENT
VITE_ENV=
```
## Building

Before creating a production version of your app, make sure everything works.

```bash
pnpm run build
```

> You can preview the built app with `pnpm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
