# language: zh-CN
功能: 冒烟剧本
<剧本描述>

  背景: 登录DM网站
    假如浏览到DM网站 "http://192.168.4.166:9090/DM/#/"
    那么输入用户名"admin",密码"adminroot"进行登陆

  场景: 上传数据
    当进入数据管理
    那么在原始数据产品中上传影像数据
    并且关闭上传窗口
    那么点击退出

  场景: 删除数据
    当进入数据管理
    那么点击原始数据产品
    并且点击下一页
    那么选择第一条数据进行删除
    并且点击确认按钮删除
    那么点击退出