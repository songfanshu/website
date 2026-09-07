# 先进光电与神经形态器件团队网站

这是一个纯 HTML/CSS/JavaScript 静态科研团队网站，适合 GitHub Pages、腾讯云静态网站托管等部署。

## 当前版本

- 全屏横向页面切换
- 鼠标滚轮、方向键、PageUp/PageDown、Home/End 导航
- 手机端触摸左右滑动
- 中文科研院所风格
- SVG 光电/神经形态视觉元素
- 团队成员信息占位，可后续直接替换照片
- 论文、研究方向、联系方式页面
- 中山大学材料学院地址与腾讯地图入口

## GitHub Pages

在 GitHub 仓库进入 Settings → Pages，将 Source 设置为 Deploy from a branch，选择 `main` 和 `/ (root)`，保存即可。

网站入口文件为根目录的 `index.html`，不依赖 Node.js、React 或构建工具。

## 后续更新

照片可放入 `assets/people/`，然后在 `index.html` 中将占位区域替换为 `<img>`。论文和团队信息也可以继续扩展为独立 JSON 数据文件。
