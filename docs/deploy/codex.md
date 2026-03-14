# CodeX 部署指南

## 📋 前置要求

请先确保已安装 Node.js 18+。

## 🚀 安装 CodeX

```bash
npm install -g @openai/codex@latest
```

验证安装：

```bash
codex --version
```

## 🖥️ Windows 平台

### 创建配置目录

```powershell
mkdir $env:USERPROFILE\.codex
cd $env:USERPROFILE\.codex
```

### 创建 config.toml

```toml
model_provider = "FOXNIO"
model = "gpt-5.2-codex"
model_reasoning_effort = "xhigh"
network_access = "enabled"
disable_response_storage = true
approval_policy = "on-request"
web_search = "live"
sandbox_mode = "danger-full-access"

[model_providers.FOXNIO]
name = "FOXNIO"
base_url = "https://www.foxnio.com/codex/v1"
wire_api = "responses"
requires_openai_auth = true
```

### 创建 auth.json

```json
{
  "OPENAI_API_KEY": "你的Key"
}
```

重启终端，输入 `codex` 即可使用。

## 🍏 macOS / 🐧 Linux 平台

### 创建配置目录

```bash
mkdir -p ~/.codex
cd ~/.codex
```

### 创建 config.toml

内容同 Windows 平台。

### 创建 auth.json

内容同 Windows 平台。

重启终端，输入 `codex` 即可使用。

::: warning ⚠️ 注意
请将 `你的Key` 替换为你自己的专属 Key。
:::
