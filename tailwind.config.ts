import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {},
  },
  plugins: [
    require('@sira-ui/tailwind')({
      themes: [
        {
          name: 'light',
          colorScheme: 'light',
        },
        {
          name: 'dark',
          colorScheme: 'dark',
          prefersColorScheme: true,
        },
      ],
    }),
  ],
} satisfies Config;
