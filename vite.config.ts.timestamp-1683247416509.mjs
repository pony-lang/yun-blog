// vite.config.ts
import { loadEnv } from "vite";
import path, { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import svgLoader from "vite-svg-loader";
import UnoCSS from "unocss/vite";
import DefineOptions from "unplugin-vue-define-options/vite";
var __vite_injected_original_dirname = "D:\\VueProject\\v3ts\\YunGui-blog";
var vite_config_default = (configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd());
  const { VITE_PUBLIC_PATH } = viteEnv;
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "./src")
      }
    },
    server: {
      https: false,
      host: true,
      port: 3333,
      open: false,
      cors: true,
      strictPort: false,
      proxy: {
        "/api/v1": {
          target: "https://mock.mengxuegu.com/mock/643f9ca1dfa03133b0ca75b8/api/v1",
          ws: true,
          changeOrigin: true,
          rewrite: (path2) => path2.replace("/api/v1", "")
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 2e3,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
          pure_funcs: ["console.log"]
        },
        format: {
          comments: false
        }
      },
      assetsDir: "static"
    },
    plugins: [
      vue(),
      vueJsx(),
      svgLoader(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
        symbolId: "icon-[dir]-[name]"
      }),
      UnoCSS(),
      DefineOptions()
    ]
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxWdWVQcm9qZWN0XFxcXHYzdHNcXFxcWXVuR3VpLWJsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFZ1ZVByb2plY3RcXFxcdjN0c1xcXFxZdW5HdWktYmxvZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVnVlUHJvamVjdC92M3RzL1l1bkd1aS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7LypcbiAqIEBBdXRob3I6IGJpblxuICogQERhdGU6IDIwMjItMDktMjEgMDk6NTE6NTBcbiAqIEBMYXN0RWRpdG9yczogYmluXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIzLTA0LTI0IDEwOjIzOjUzXG4gKiBAb2JqZWN0RGVzY3JpcHRpb246IHZpdGVcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcbiAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHR5cGUgQ29uZmlnRW52LCB0eXBlIFVzZXJDb25maWdFeHBvcnQsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIlxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCJcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSBcInZpdGUtc3ZnLWxvYWRlclwiXG5pbXBvcnQgVW5vQ1NTIGZyb20gXCJ1bm9jc3Mvdml0ZVwiXG5pbXBvcnQgRGVmaW5lT3B0aW9ucyBmcm9tIFwidW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGVcIlxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKGNvbmZpZ0VudjogQ29uZmlnRW52KTogVXNlckNvbmZpZ0V4cG9ydCA9PiB7XG4gIGNvbnN0IHZpdGVFbnYgPSBsb2FkRW52KGNvbmZpZ0Vudi5tb2RlLCBwcm9jZXNzLmN3ZCgpKSBhcyBJbXBvcnRNZXRhRW52XG4gIGNvbnN0IHsgVklURV9QVUJMSUNfUEFUSCB9ID0gdml0ZUVudlxuICByZXR1cm4ge1xuICAgIGJhc2U6IFZJVEVfUFVCTElDX1BBVEgsXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJylcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgLyoqIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRiBIVFRQUyAqL1xuICAgICAgaHR0cHM6IGZhbHNlLFxuICAgICAgLyoqIFx1OEJCRVx1N0Y2RSBob3N0OiB0cnVlIFx1NjI0RFx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOCBOZXR3b3JrIFx1NzY4NFx1NUY2Mlx1NUYwRlx1RkYwQ1x1NEVFNSBJUCBcdThCQkZcdTk1RUVcdTk4NzlcdTc2RUUgKi9cbiAgICAgIGhvc3Q6IHRydWUsIC8vIGhvc3Q6IFwiMC4wLjAuMFwiXG4gICAgICAvKiogXHU3QUVGXHU1M0UzXHU1M0Y3ICovXG4gICAgICBwb3J0OiAzMzMzLFxuICAgICAgLyoqIFx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OCAqL1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAvKiogXHU4REU4XHU1N0RGXHU4QkJFXHU3RjZFXHU1MTQxXHU4QkI4ICovXG4gICAgICBjb3JzOiB0cnVlLFxuICAgICAgLyoqIFx1N0FFRlx1NTNFM1x1ODhBQlx1NTM2MFx1NzUyOFx1NjVGNlx1RkYwQ1x1NjYyRlx1NTQyNlx1NzZGNFx1NjNBNVx1OTAwMFx1NTFGQSAqL1xuICAgICAgc3RyaWN0UG9ydDogZmFsc2UsXG4gICAgICAvKiogXHU2M0E1XHU1M0UzXHU0RUUzXHU3NDA2ICovXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaS92MSc6IHtcbiAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL21vY2subWVuZ3h1ZWd1LmNvbS9tb2NrLzY0M2Y5Y2ExZGZhMDMxMzNiMGNhNzViOC9hcGkvdjEnLFxuICAgICAgICAgIHdzOiB0cnVlLFxuICAgICAgICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUxNDFcdThCQjhcdThERThcdTU3REYgKi9cbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoJy9hcGkvdjEnLCAnJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIC8qKiBcdTZEODhcdTk2NjRcdTYyNTNcdTUzMDVcdTU5MjdcdTVDMEZcdThEODVcdThGQzcgNTAwa2IgXHU4QjY2XHU1NDRBICovXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsXG4gICAgICAvKiogVml0ZSAyLjYueCBcdTRFRTVcdTRFMEFcdTk3MDBcdTg5ODFcdTkxNERcdTdGNkUgbWluaWZ5OiBcInRlcnNlclwiLCB0ZXJzZXJPcHRpb25zIFx1NjI0RFx1ODBGRFx1NzUxRlx1NjU0OCAqL1xuICAgICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICAgIC8qKiBcdTU3MjhcdTYyNTNcdTUzMDVcdTRFRTNcdTc4MDFcdTY1RjZcdTc5RkJcdTk2NjQgY29uc29sZS5sb2dcdTMwMDFkZWJ1Z2dlciBcdTU0OEMgXHU2Q0U4XHU5MUNBICovXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAgZHJvcF9jb25zb2xlOiBmYWxzZSxcbiAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICAgIHB1cmVfZnVuY3M6IFsnY29uc29sZS5sb2cnXVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAvKiogXHU1MjIwXHU5NjY0XHU2Q0U4XHU5MUNBICovXG4gICAgICAgICAgY29tbWVudHM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKiogXHU2MjUzXHU1MzA1XHU1NDBFXHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU3NkVFXHU1RjU1ICovXG4gICAgICBhc3NldHNEaXI6ICdzdGF0aWMnXG4gICAgfSxcbiAgICAvKiogVml0ZSBcdTYzRDJcdTRFRjZcdTZDRThcdTUxOEMgKi9cbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIHZ1ZUpzeCgpLFxuICAgICAgLyoqIFx1NUMwNiBTVkcgXHU5NzU5XHU2MDAxXHU1NkZFXHU4RjZDXHU1MzE2XHU0RTNBIFZ1ZSBcdTdFQzRcdTRFRjYgKi9cbiAgICAgIHN2Z0xvYWRlcigpLFxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcInNyYy9pY29ucy9zdmdcIildLFxuICAgICAgICBzeW1ib2xJZDogXCJpY29uLVtkaXJdLVtuYW1lXVwiXG4gICAgICB9KSxcbiAgICAgIC8qKiBVbm9DU1MgKi9cbiAgICAgIFVub0NTUygpLFxuICAgICAgLyoqIERlZmluZU9wdGlvbnMgXHU1M0VGXHU0RUU1XHU2NkY0XHU3QjgwXHU1MzU1XHU3Njg0XHU2Q0U4XHU1MThDXHU3RUM0XHU0RUY2XHU1NDBEXHU3OUYwICovXG4gICAgICBEZWZpbmVPcHRpb25zKCksXG4gICAgICAvKiogXHU4MUVBXHU1MkE4XHU2MzA5XHU5NzAwXHU1RjE1XHU1MTY1IChcdTVERjJcdTY2RjRcdTY1MzlcdTRFM0FcdTVCOENcdTY1NzRcdTVGMTVcdTUxNjVcdUZGMENcdTYyNDBcdTRFRTVcdTZDRThcdTkxQ0FcdTRFODYpICovXG4gICAgICAvLyBBdXRvSW1wb3J0KHtcbiAgICAgIC8vICAgZHRzOiBcIi4vdHlwZXMvYXV0by1pbXBvcnRzLmQudHNcIixcbiAgICAgIC8vICAgLyoqIFx1ODFFQVx1NTJBOFx1NjMwOVx1OTcwMFx1NUJGQ1x1NTE2NSBFbGVtZW50IFBsdXMgXHU3NkY4XHU1MTczXHU1MUZEXHU2NTcwXHVGRjBDXHU2QkQ0XHU1OTgyIEVsTWVzc2FnZSAqL1xuICAgICAgLy8gICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICAgLy8gICAvKiogXHU2ODM5XHU2MzZFXHU4MUVBXHU1MkE4XHU2MzA5XHU5NzAwXHU1QkZDXHU1MTY1XHU3Njg0XHU3NkY4XHU1MTczIEFQSVx1RkYwQ1x1NzUxRlx1NjIxMCAuZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbiBcdTY1ODdcdTRFRjZcdTRGOUIgRXNsaW50IFx1OEJDNlx1NTIyQiAqL1xuICAgICAgLy8gICBlc2xpbnRyYzoge1xuICAgICAgLy8gICAgIGVuYWJsZWQ6IHRydWUsIC8vIFx1OUVEOFx1OEJBNCBmYWxzZVxuICAgICAgLy8gICAgIGZpbGVwYXRoOiBcIi4vdHlwZXMvLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb25cIiwgLy8gXHU5RUQ4XHU4QkE0IFwiLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvblwiXG4gICAgICAvLyAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSAvLyBcdTlFRDhcdThCQTQgdHJ1ZSAodHJ1ZSB8IGZhbHNlIHwgXCJyZWFkb25seVwiIHwgXCJyZWFkYWJsZVwiIHwgXCJ3cml0YWJsZVwiIHwgXCJ3cml0ZWFibGVcIilcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSksXG4gICAgICAvLyBDb21wb25lbnRzKHtcbiAgICAgIC8vICAgZHRzOiBcIi4vdHlwZXMvY29tcG9uZW50cy5kLnRzXCIsXG4gICAgICAvLyAgIC8qKiBcdTgxRUFcdTUyQThcdTYzMDlcdTk3MDBcdTVCRkNcdTUxNjUgRWxlbWVudCBQbHVzIFx1N0VDNFx1NEVGNiAqL1xuICAgICAgLy8gICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgICAvLyB9KVxuICAgIF1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQVFBLFNBQWdELGVBQWU7QUFDL0QsT0FBTyxRQUFRLGVBQWU7QUFDOUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLGVBQWU7QUFDdEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sbUJBQW1CO0FBZjFCLElBQU0sbUNBQW1DO0FBa0J6QyxJQUFPLHNCQUFRLENBQUMsY0FBMkM7QUFDekQsUUFBTSxVQUFVLFFBQVEsVUFBVSxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQ3JELFFBQU0sRUFBRSxpQkFBaUIsSUFBSTtBQUM3QixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ2pDO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BRU4sT0FBTztBQUFBLE1BRVAsTUFBTTtBQUFBLE1BRU4sTUFBTTtBQUFBLE1BRU4sTUFBTTtBQUFBLE1BRU4sTUFBTTtBQUFBLE1BRU4sWUFBWTtBQUFBLE1BRVosT0FBTztBQUFBLFFBQ0wsV0FBVztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1IsSUFBSTtBQUFBLFVBRUosY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFBQSxVQUFRQSxNQUFLLFFBQVEsV0FBVyxFQUFFO0FBQUEsUUFDN0M7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BRUwsdUJBQXVCO0FBQUEsTUFFdkIsUUFBUTtBQUFBLE1BRVIsZUFBZTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsZUFBZTtBQUFBLFVBQ2YsWUFBWSxDQUFDLGFBQWE7QUFBQSxRQUM1QjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBRU4sVUFBVTtBQUFBLFFBQ1o7QUFBQSxNQUNGO0FBQUEsTUFFQSxXQUFXO0FBQUEsSUFDYjtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BRVAsVUFBVTtBQUFBLE1BQ1YscUJBQXFCO0FBQUEsUUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxlQUFlLENBQUM7QUFBQSxRQUN2RCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsTUFFRCxPQUFPO0FBQUEsTUFFUCxjQUFjO0FBQUEsSUFrQmhCO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
