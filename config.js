// 配置
window.Config = {

  // 站点名
  SiteName: '站点检测-ZHK监控',

  // 站点链接
  SiteUrl: 'zhk.wenlei.club',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'cool-bread-f012.1609676795.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm791449095-2195ee95fb13ff04754c3ce3',
    'm791449101-388c78c4af962ba615e2849e',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '🖊 智慧考试笔',
      url: 'https://zhksb.net/'
    },
    {
      text: '🍉 西瓜博客',
      url: 'https://space.bilibili.com/1272602094/'
    }
  ]
};