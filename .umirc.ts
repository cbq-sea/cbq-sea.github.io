import { defineConfig } from 'dumi';

export default defineConfig({
  title: '崔的blog',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  outputPath: 'blog',
  publicPath: '/blog/',
  base: '/blog',
  hash: true,
  // logo: '/xrk.jpeg',
  // more config: https://d.umijs.org/config
});
