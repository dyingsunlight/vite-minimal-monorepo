import { defineConfig } from 'vite'
import path from "path"

export default defineConfig({
    root: "pages",
    build: {
        outDir: path.resolve(__dirname, 'dist'),
    }
})
