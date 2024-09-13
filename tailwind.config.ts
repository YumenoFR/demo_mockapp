import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // src フォルダ内のすべてのファイル
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;

