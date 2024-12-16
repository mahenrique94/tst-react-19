import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const repoName = process.env.REPO_NAME?.split("/").at(-1) || "";

  return {
    base:
      mode === "production" && repoName.trim().length > 0
        ? `/${repoName}/`
        : undefined,
    plugins: [react()],
  };
});
