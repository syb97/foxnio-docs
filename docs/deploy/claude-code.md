# Claude Code 部署指南

## 📋 前置要求

请先确保已安装 Node.js 18+。

## 🚀 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

验证安装：

```bash
claude --version
```

## ⚡ 跳过初始化报错

使用中转渠道时，Claude Code 首次启动会报错：

```
Welcome to Claude Code
Unable to connect to Anthropic services
Failed to connect to api.anthropic.com: ERR_BAD_REQUEST
```

在用户主目录下找到 `~/.claude.json` 文件，在末尾添加 `hasCompletedOnboarding: true` 字段：

```json
{
  "hasCompletedOnboarding": true
}
```

::: warning ⚠️ 注意 JSON 格式
添加字段前，需要在上一个字段末尾**补一个英文逗号**，否则 JSON 格式错误会导致 Claude Code 无法启动。
:::

## 🖥️ Windows 平台

配置环境变量（PowerShell）：

```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "你的Key", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://www.foxnio.com", "User")
```

::: tip 💡 提示
请注意将 `你的Key` 替换为你自己的专属 Key！设置好后，重启终端以让环境变量生效。
:::

## 🍏 macOS 平台

```bash
echo 'export ANTHROPIC_AUTH_TOKEN="你的Key"' >> ~/.bash_profile
echo 'export ANTHROPIC_BASE_URL="https://www.foxnio.com"' >> ~/.bash_profile
source ~/.bash_profile
```

## 🐧 Linux 平台

Ubuntu/Debian（Bash）：

```bash
echo 'export ANTHROPIC_AUTH_TOKEN="你的Key"' >> ~/.bashrc
echo 'export ANTHROPIC_BASE_URL="https://www.foxnio.com"' >> ~/.bashrc
source ~/.bashrc
```

## ⌨️ 手动修改配置文件

也可以直接编辑 `~/.claude/settings.json`，添加以下内容：

```json
{
  "permissions": {
    "allow": [],
    "deny": []
  },
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的Key",
    "ANTHROPIC_BASE_URL": "https://www.foxnio.com"
  }
}
```

::: tip 💡 提示
请将 `你的Key` 替换为你自己的专属 Key。
:::

## 🎉 启动 Claude Code

重启终端后，进入项目目录或任意目录，输入 `claude` 即可启动使用。
