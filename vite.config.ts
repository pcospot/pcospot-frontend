import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'global': 'window',  // global을 window로 설정
  },
});
