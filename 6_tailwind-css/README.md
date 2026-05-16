### Tailwind Setup
After creating react folder using npm react vite
## Step 1: Install Tailwind CSS
Install `tailwindcss` and `@tailwindcss/vite` via npm.

```bash
npm install tailwindcss @tailwindcss/vite
```

## Step 2: Configure the Vite plugin

Add the @tailwindcss/vite plugin to your Vite configuration.  (in vite.config.js file)

```bash
import tailwindcss from '@tailwindcss/vite'
```

Add this plugin 
``` bash
plugins: [
    tailwindcss(),
  ],
```

## Step 3: Import Tailwind CSS
Add an `@import` to your CSS file that imports Tailwind CSS.

```bash
@import "tailwindcss";
```