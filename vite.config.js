import { defineConfig } from "vite"
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@config": path.resolve(__dirname, "./src/config/index.ts"),
            "@scenes/*": path.resolve(__dirname, "./src/scenes/*"),
        },
    },
})
