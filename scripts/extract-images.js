#!/usr/bin/env node
/**
 * 飞书文档图片提取脚本
 * 遍历所有文档，提取图片token，构建映射表
 */

const fs = require('fs');
const path = require('path');

// 所有文档的 obj_token 列表（从飞书wiki获取）
const DOC_TOKENS = [
  // 顶级页面
  { token: 'HOCwd2MQto6Weyxq3PEchhEin9g', title: '欢迎页', slug: 'welcome' },
  { token: 'L1IWdYyctou9SUxURckctfCSn4f', title: '快速上手', slug: 'quickstart' },
  { token: 'NzBzdd41VoNuW1xvd1hc1kThnmc', title: 'APP下载', slug: 'download' },
  { token: 'AdQad8DNdo4vfjxxYI2cHKHrnZc', title: '录音润色', slug: 'voice-record' },
  { token: 'E4B9d9KmBoT1pxxUOmac3rXRnig', title: '会议录音', slug: 'meeting' },
  { token: 'OpZSdmGSZolhLnxfSwgcLSidnYb', title: '课堂录音', slug: 'classroom' },
  { token: 'TFDOd4FC9oWgTMxOkjEc6vSJndc', title: '链接一键记', slug: 'link-capture' },
  { token: 'Y3KTdEbrKoakKnx4vp0c8mnVnZd', title: '拍照记录', slug: 'photo' },
  { token: 'ASmhdiRsno9EdsxiKwLcjq65nIc', title: '手机内录', slug: 'internal-record' },
  { token: 'I4qbdd1Fto3UVWx1x1scEQ8onNc', title: '导入音视频', slug: 'import' },
  { token: 'FygsdeEyOoGVf4xJk20cL4bknte', title: '智能拍书', slug: 'book-scan' },
  { token: 'TIzPdx4miophTXx4bWacNJ3ln4c', title: '声纹识别', slug: 'voiceprint' },
  { token: 'LHeLdxbiJohPrXxXkSLcf7XAnAH', title: '语音口令', slug: 'voice-command' },
  { token: 'G7AeduUCxoNwi5xMICNc3ly5nhg', title: '语音词库', slug: 'vocabulary' },
  { token: 'OwAUd2Yrfor5whxDe2kcAlAbntd', title: '桌面小组件', slug: 'widget' },
  { token: 'HUJzdBaYLoFbDcxRLkIcnmxfnnf', title: 'Siri唤起', slug: 'siri' },
  { token: 'McWKdmg0qoyHpmxUjODcBFROnXg', title: '快捷指令', slug: 'shortcuts' },
  { token: 'RiPbd6HZJoTuYfxGZrUchJeensa', title: '微信小程序', slug: 'wechat-mini' },
  { token: 'PMnGddQsZoE9qCxU1CQctltvnCh', title: '网页端', slug: 'web' },
  // 知识库
  { token: 'WCAvdzlGuokuiRxrqRrc58N8nEh', title: '创建知识库', slug: 'kb-create' },
  { token: 'ACyDdj9GxodeOdxYpL7cdQVUnPh', title: '帮你听直播', slug: 'livestream' },
  { token: 'JgAJdM1TMoAg18xX9wAc99JXnEe', title: '订阅博主', slug: 'subscribe' },
  { token: 'K266daMdzoXT2IxBOrmcrtZvngh', title: '上传文件', slug: 'upload' },
  { token: 'XtUkdCYnhojg8AxbfV8cuWq1nGl', title: '分享团队', slug: 'share' },
];

// 图片映射结果
const imageMap = {};

console.log('文档token列表已准备，共', DOC_TOKENS.length, '个文档');
console.log('需要通过飞书API逐个获取图片信息');
console.log(JSON.stringify(DOC_TOKENS, null, 2));
