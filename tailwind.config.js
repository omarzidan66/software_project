/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // تأكد من إضافة ts, tsx إذا كنت تستخدم React أو Next.js
  theme: {
    extend: {
      colors: {
        customGold: '#CEB579',
      },
    },
  },
  plugins: [],
};