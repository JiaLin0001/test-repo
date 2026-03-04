const express = require('express');
const { greet } = require('./src/utils');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test App - 部署成功！</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 16px;
            padding: 40px;
            max-width: 600px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
        }
        h1 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 2.5em;
        }
        .success {
            color: #10b981;
            font-size: 4em;
            margin-bottom: 20px;
        }
        .info {
            background: #f3f4f6;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: left;
        }
        .info h3 {
            color: #374151;
            margin-bottom: 10px;
        }
        .info p {
            color: #6b7280;
            line-height: 1.6;
        }
        .api-section {
            margin-top: 30px;
        }
        .api-link {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            margin: 10px;
            transition: transform 0.2s;
        }
        .api-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        .badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.875em;
            margin: 5px;
        }
        .footer {
            margin-top: 30px;
            color: #9ca3af;
            font-size: 0.875em;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="success">🎉</div>
        <h1>部署成功！</h1>
        <div class="info">
            <h3>项目信息</h3>
            <p>这是一个测试项目，通过 Vercel 部署到云端。</p>
            <p><strong>技术栈：</strong> Node.js + Express</p>
            <p><strong>部署平台：</strong> Vercel</p>
        </div>
        <div class="api-section">
            <h3>API 端点</h3>
            <p style="margin: 15px 0; color: #6b7280;">试试这些 API 接口：</p>
            <a href="/api/greet?name=World" class="api-link">/api/greet?name=World</a>
            <a href="/api/greet?name=OpenClaw" class="api-link">/api/greet?name=OpenClaw</a>
            <a href="/api/status" class="api-link">/api/status</a>
            <a href="/api/health" class="api-link">/api/health</a>
        </div>
        <div class="footer">
            <p>由 OpenClaw AI 助手部署</p>
            <p><span class="badge">Node.js</span><span class="badge">Express</span><span class="badge">Vercel</span></p>
        </div>
    </div>
</body>
</html>
    `);
});

// API: Greet
app.get('/api/greet', (req, res) => {
    const name = req.query.name || 'World';
    res.json({
        success: true,
        message: greet(name),
        timestamp: new Date().toISOString()
    });
});

// API: Status
app.get('/api/status', (req, res) => {
    res.json({
        success: true,
        status: 'running',
        version: '1.0.0',
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
        platform: process.platform,
        nodeVersion: process.version,
        timestamp: new Date().toISOString()
    });
});

// API: Health Check
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        healthy: true,
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested endpoint does not exist',
        availableEndpoints: ['/', '/api/greet', '/api/status', '/api/health']
    });
});

// Start server only if not on Vercel
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
        console.log(`📍 Local: http://localhost:${PORT}`);
    });
}

module.exports = app;
