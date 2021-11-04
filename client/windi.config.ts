import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
	attributify: true,
	extract: {
		exclude: ["node_modules", ".git"],
	},
});
