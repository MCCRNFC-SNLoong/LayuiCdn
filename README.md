<p align="center">
  <a href="https://www.layuicdn.com/">
    <img src="https://images.gitee.com/uploads/images/2020/0213/012006_90aa61f8_1333791.png" alt="LayuiCdn" width="360" />
  </a>
</p>
<p align="center">
    LayuiCdn为广大前端用户提供免费CDN静态资源库的加速服务，快速，稳定，开放，自由（自主上传文件）加速任意项目
</p>


#### 依托架构
 **LayuiCdn 基于 [LayuiCdnPro](https://pro.layuicdn.com/?rurl=LayuiCdn)[Cdn] + 腾讯云 [API网关 + SCF无服务器云函数 + DSA动态网络加速 + COS对象储存] 等，全局托管实现全年不休的云上计算业务，全程无需人为干预即可提供自动运行等计算能力,进行实时监控，并24小时内更新到LayuiCdn API** 


#### 1-基础用法

1. 通常我们使用Layui需要在面页下载并加载Layui目录下文件如下

```
<link type="text/css" href="./layui/css/layui.css" />
<script src="./layui/layui.js"></script>

layui/
  ├─css
  │  └─layui.css   # 核心样式库
  └─layui.js       # 核心模块库
```
2. 使用LayuiCdn后我们将无需打包下载加载任何文件！只需要在面页写下两行代码：

```
<link type="text/css" href="https://www.layuicdn.com/layui/css/layui.css" />
<script src="https://www.layuicdn.com/layui/layui.js"></script>
```

#### 基础示例：  


```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="https://www.layuicdn.com/layui-v2.8.0/css/layui.css" />
  </head>
  <body>
    <script src="https://www.layuicdn.com/layui-v2.8.0/layui.js"></script>
    <!--您的Layui代码start-->
    <script type="text/javascript">
      layui.use(function(){
        var layer = layui.layer; //弹层 示例...

        // 弹出一个示例
        layer.msg('Hello World', {icon: 6});

      });
    </script>
  </body>
</html>
```



最简写法: 自动最新版

```
<link type="text/css" href="https://www.layuicdn.com/layui/css/layui.css" />
<script src="https://www.layuicdn.com/layui/layui.js"></script>
```


建议写法: 强制版本版

```
<link type="text/css" href="https://www.layuicdn.com/layui-v2.8.0/css/layui.css" />
<script src="https://www.layuicdn.com/layui-v2.8.0/layui.js"></script>
```

#### 2-高级用法
1. 当我们感觉上述方法使用LayuiCdn还是很臃肿，那么您可以尝试以下写法

```
<script src="https://www.layuicdn.com/auto/layui.js" v="layui"></script>
```

2. 将自动实现  **基础用法** 的全部逻辑加载！务必将代码写在面页头部的head标签内

```
<head>
  <script src="https://www.layuicdn.com/auto/layui.js"></script>
</head>
```

3. 标签内v参数为版本, 如v="2.8.0" 即自动引入2.8.0版本的layui, 如值为 layui 或 不携带v参数 则默认为最新版本的layui 例: 

```
<script src="https://www.layuicdn.com/auto/layui.js" v="2.8.0"></script> 
```

4. e参数为模块, 如e="layui" 或 e="layui.all" 即自动引入 layui 或 layui.all 的js模块, 如不携带e参数则默认为layui 例: 

 **注：此模块仅支持2.6.0以下版本** 

```
<script src="https://www.layuicdn.com/auto/layui.js" e="layui.all"></script>
```

最简写法: 自动最新版

```
<script src="https://www.layuicdn.com/auto/layui.js"></script>
```

建议写法: 强制版本 解析为2.8.0版本

```
<script src="https://www.layuicdn.com/auto/layui.js" v="2.8.0"></script>
```

#### 高级示例：  


```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://www.layuicdn.com/auto/layui.js" v="2.8.0"></script>
  </head>
  <body>
    <!--您的Layui代码start-->
    <script type="text/javascript">
      layui.use(function(){
        var layer = layui.layer; //弹层 示例...

        // 弹出一个示例
        layer.msg('Hello World', {icon: 6});

      });
    </script>
  </body>
</html>  
```

### 相关
[官网](https://www.layuicdn.com/)  [API](https://www.layuicdn.com/api.html)  [文档](https://www.layuicdn.com/docs/)  

