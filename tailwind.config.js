/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('/path/to/your/image.jpg')", // Adjust the path as needed
      },
      blur: {
        '4xl': '40px',
      },
    },
  },
  plugins: [],
};
