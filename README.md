# 四面衣橱 · GitHub Pages 部署版

双击 `index.html` 可以打开此版本。上传时，把本文件夹里面的文件和 `assets` 目录放到 GitHub 仓库根目录，让 `index.html` 和 `assets` 同级。请一并上传隐藏文件 `.nojekyll`。在 Mac 的 Finder 可按 `Command + Shift + .` 显示隐藏文件。

在仓库打开 **Settings → Pages**，将 **Source** 选为 **Deploy from a branch**，设置分支为 **main**、目录为 **/(root)**，再点 **Save**。发布完成后，在 Pages 设置里点击 **Visit site**。 [GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 上线文件

- `index.html` 是网站入口。
- `styles.css` 包含合并后的站点样式。
- `site.js` 包含站点交互和打包后的动画组件。
- `content.js` 用于更新项目经历、作品、联系方式和简历路径。修改内容可直接提交这个文件。
- `assets/` 存放图片、贴纸和 PDF 简历。
- `THIRD-PARTY-LICENSES.txt` 保留所用组件的许可证。

部署版本沿用原始 PDF 简历。访客可以下载，其中含有手机号。留言保存在访客当前浏览器，各访客的记录独立。
