# 部署说明

## 🚀 方法一：Vercel GitHub 集成（推荐，2分钟）

这是最简单的方法，部署后每次推送代码都会自动更新。

### 步骤：

1. **打开 Vercel 部署页面**
   - 点击这个链接：https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app
   - 或者直接访问：https://vercel.com/new

2. **选择 GitHub**
   - 点击 "Continue with GitHub"
   - 使用你的 GitHub 账号登录：`shan9liang@163.com`
   - 授权 Vercel 访问你的仓库

3. **选择项目**
   - 在仓库列表中选择 `test-repo`
   - 点击 "Import"

4. **配置项目**
   - Project Name: `test-repo`（保持默认）
   - Framework Preset: `Other`（会自动检测 Node.js）
   - Build Command: 留空
   - Output Directory: 留空
   - Install Command: `npm install`
   - Start Command: `node server.js`

5. **部署**
   - 点击 "Deploy"
   - 等待 1-2 分钟

6. **完成！**
   - 部署成功后会显示访问 URL
   - 格式：`https://test-repo-xxx.vercel.app`

---

## 🔧 方法二：使用命令行部署（需要 Vercel 账号）

如果你已经设置了 Vercel CLI，可以运行：

```bash
cd /Users/jialin/.openclaw/workspace/test-repo
vercel --prod
```

---

## ✨ 部署后的功能

部署成功后，你可以访问：

- **主页**: https://your-url.vercel.app
- **Greet API**: https://your-url.vercel.app/api/greet?name=World
- **Status API**: https://your-url.vercel.app/api/status
- **Health API**: https://your-url.vercel.app/api/health

---

## 📝 API 使用示例

```bash
# 获取问候
curl "https://your-url.vercel.app/api/greet?name=你的名字"

# 获取系统状态
curl "https://your-url.vercel.app/api/status"

# 健康检查
curl "https://your-url.vercel.app/api/health"
```

---

**推荐使用方法一，Vercel 会自动配置和部署！** 🎉
