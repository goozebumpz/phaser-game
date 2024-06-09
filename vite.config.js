import { defineConfig } from "vite"
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@config": path.resolve(__dirname, "./src/config/index.ts"),
            "@scenes/*": path.resolve(__dirname, "./src/scenes/*"),
            "@entities/*": path.resolve(__dirname, "./src/entities/*"),
            "@shared/*": path.resolve(__dirname, "./src/shared/*"),
            "@assets/*": path.resolve(__dirname, "./src/assets/*"),
        },
    },
})
