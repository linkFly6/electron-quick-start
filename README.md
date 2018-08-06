# marknode

专为 Evernote/印象笔记打造的 Markdown 可视化编辑器。


## 开发

```bash
# 设置 electron 国内代理
export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"

# 安装依赖
npm i --dd

# 启动应用
npm start
```


> 惨痛的消息，这项目刚立项一周，结果印象笔记官方支持 markdown 了...但是这个项目整体搭建的还不错，就用作脚手架吧...



## 常用工具

```
strip-json-comments -> 解析可以包含注释的 json
electron-log -> electron log 管理
nedb -> 本地化数据库
electron-settings -> 程序设置保存(从 atom 里抽离)
```