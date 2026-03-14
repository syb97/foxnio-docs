# OpenClaw 配置

[OpenClaw](https://openclaw.ai) 是一款多平台 AI 编程代理工具，支持终端 TUI、Web Dashboard 和多种聊天渠道。

## 配置供应商

在 `~/.openclaw/openclaw.json` 的 `models.providers` 中添加：

```json
{
  "foxnio": {
    "baseUrl": "https://www.foxnio.com",
    "apiKey": "你的Key",
    "api": "anthropic-messages",
    "models": [
      {
        "id": "claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "api": "anthropic-messages",
        "contextWindow": 200000,
        "maxTokens": 16000
      }
    ]
  }
}
```

## 重启网关

修改后执行以下命令重启网关生效：

```bash
openclaw gateway restart
```

::: tip 💡 提示
请将 `你的Key` 替换为你自己的专属 Key。
:::
