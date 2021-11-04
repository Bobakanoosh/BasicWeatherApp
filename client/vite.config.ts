import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		WindiCSS(),
		AutoImport({
			include: [
				/\.ts$/,
				/\.vue$/,
				/\.vue\?vue/, // .vue
			],
			imports: ["vue"],
			dts: true,
		}),
	],
});
