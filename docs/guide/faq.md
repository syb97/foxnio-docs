# 常见问题

## Key 丢失怎么办？

登录控制台，删除旧 Key 后重新创建即可。

## 想用最新强大模型怎么办？

可以在付费站 [api.foxnio.com](https://api.foxnio.com) 购买使用。

## 首次启动报错 Unable to connect？

这是正常现象，中转渠道无法通过官方初始化确认。在 `~/.claude.json` 中添加 `"hasCompletedOnboarding": true` 即可跳过。

详见 [Claude Code 部署 - 跳过初始化报错](/deploy/claude-code#跳过初始化报错)。

## 连接超时怎么办？

1. 检查网络连接是否正常
2. 确认 Base URL 填写正确
3. 确认 Key 有效且未过期
4. 联系群主获取帮助

## Claude Code 能用 GPT 模型吗？

可以。创建 Key 时选择 codex 路由，配置好 FOXNIO 的 Base URL 后，Claude Code 中的 opus 会对应 gpt-5.2。
