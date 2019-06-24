//*初始化全局渲染*//
layui.config({
  version: $update_Time //缓存
}),layui.use(['layer','form','laytpl'],
function() {
  layer = layui.layer,
  form = layui.form,
  laytpl = layui.laytpl,
  device = layui.device();
});
//*LAYUI END*//
//*构造链接*//
function linkjump($type, $link, $rurl) {
  if ($rurl == 0) {
    layer.msg('正在为您跳转...', {
      icon: 16,
      time: 500
    },
    function() {
      window.open($link, $type);
    });
  } else {
    layer.msg('正在为您跳转...', {
      icon: 16,
      time: 500
    },
    function() {
      window.open($link + '?rurl=' + window.location.href + '&v=' + new Date().getTime(), $type);
    });
  }
};
//*IE检测*//
function IeAdaptation() {
  if (device.ie && device.ie < 8) {
    layer.alert('我们最低支持ie8，您当前使用的是古老的 IE' + device.ie + '，你丫的肯定是火星来的逗比！');
  }
};
//*适配检测*//
function Adaptation() {
  if ($(window).width() < 1395) {
    layer.msg('您的显示屏幕太小，可能不兼容显示本面页，请放大浏览器，刷新面页', {
      time: 6000
    });
  }
};
//*Copy动作*//
if ($Chc_Copy) {
  $Chc_Copy = new Clipboard('.chc-copy'); //实例化
  $Chc_Copy.on('success',
  function(e) { //复制成功回调
    //console.log(e);
    layer.msg('复制成功，已成功复制到粘贴板！', {
      icon: 1,
      time: 2000,
      zIndex: '999999999',
      shade: 0
    });
  });
  $Chc_Copy.on('error',
  function(e) { //复制失败回调
    //console.log(e);
    layer.msg('复制失败，请升级您的浏览器！', {
      icon: 2,
      time: 2000,
      zIndex: '999999999',
      shade: [0.8, '#000']
    });
  });
}
//*查看Layui*//
function checklayuiurl($css, $js, $title) {
  $checklayuiurl = layer.open({
    type: 1, //基本层类型
    title: $title + '引入预览',
    closeBtn: false, //关闭按钮
    scrollbar: false, //屏蔽浏览器滚动条
    //offset: 'c', //坐标
    //offset: '300px', //top坐标
    moveType: 1, //拖拽模式，0或者1
    move: false, //拖拽禁止
    btnAlign: 'c', //按钮位置
    area: '800px', //宽高
    shade: 0.8, //遮罩
    anim: 3, //弹出动画
    isOutAnim: true, //关闭动画
    id: 'z-alert', //ID
    zIndex: '999999998', //层叠值 通知重要参数
    btn: ['关闭'], //按钮
    content: '<div class="layui-form">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">CSS</label>' +
                    '<div class="layui-input-inline">' +
                        '<input type="text" class="layui-input cursor-text" readonly="readonly" value="' + $css + '" />' +
                    '</div>' +
                    '<div class="layui-form-mid layui-word-aux">' +
                        '<button class="layui-btn layui-bg-black layui-btn-sm chc-copy" data-clipboard-text="' + $css + '">复制</button>' +
                    '</div>' +
                '</div>' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">JS</label>' +
                    '<div class="layui-input-inline">' +
                        '<input type="text" class="layui-input cursor-text" readonly="readonly" value="' + $js + '" />' +
                    '</div>' +
                    '<div class="layui-form-mid layui-word-aux">' +
                        '<button class="layui-btn layui-bg-black layui-btn-sm chc-copy" data-clipboard-text="' + $js + '">复制</button>' +
                    '</div>' +
                '</div>' +
            '</div>', //内容
    success: function(layero) { //成功回调
      var $btn = layero.find('.layui-layer-btn');
      var $content = layero.find('.layui-layer-content');
      $content.css('text-align', 'center');
      $content.css('padding', '15px 20px');
      $content.css('line-height', '22px');
      //$content.css('text-indent','2em');
      $content.css('border-bottom', '1px solid #e2e2e2');
      $btn.on('click',
      function() {
        layer.close($checklayuiurl);
      });
    }
  });
  form.render();
}
//*查看Layer*//
function checklayerurl($js, $title) {
  $checklayerurl = layer.open({
    type: 1, //基本层类型
    title: $title + '引入预览',
    closeBtn: false, //关闭按钮
    scrollbar: false, //屏蔽浏览器滚动条
    //offset: 'c', //坐标
    //offset: '300px', //top坐标
    moveType: 1, //拖拽模式，0或者1
    move: false, //拖拽禁止
    btnAlign: 'c', //按钮位置
    area: '800px', //宽高
    shade: 0.8, //遮罩
    anim: 3, //弹出动画
    isOutAnim: true, //关闭动画
    id: 'z-alert', //ID
    zIndex: '999999998', //层叠值 通知重要参数
    btn: ['关闭'], //按钮
    content: '<div class="layui-form">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">JS</label>' +
                    '<div class="layui-input-inline">' +
                        '<input type="text" class="layui-input cursor-text" readonly="readonly" value="' + $js + '" />' +
                    '</div>' +
                    '<div class="layui-form-mid layui-word-aux">' +
                        '<button class="layui-btn layui-bg-black layui-btn-sm chc-copy" data-clipboard-text="' + $js + '">复制</button>' +
                    '</div>' +
                '</div>' +
            '</div>', //内容
    success: function(layero) { //成功回调
      var $btn = layero.find('.layui-layer-btn');
      var $content = layero.find('.layui-layer-content');
      $content.css('text-align', 'center');
      $content.css('padding', '15px 20px');
      $content.css('line-height', '22px');
      //$content.css('text-indent','2em');
      $content.css('border-bottom', '1px solid #e2e2e2');
      $btn.on('click',
      function() {
        layer.close($checklayerurl);
      });
    }
  });
  form.render();
}
//*查看LayDate*//
function checklaydateurl($js, $title) {
  $checklaydateurl = layer.open({
    type: 1, //基本层类型
    title: $title + '引入预览',
    closeBtn: false, //关闭按钮
    scrollbar: false, //屏蔽浏览器滚动条
    //offset: 'c', //坐标
    //offset: '300px', //top坐标
    moveType: 1, //拖拽模式，0或者1
    move: false, //拖拽禁止
    btnAlign: 'c', //按钮位置
    area: '800px', //宽高
    shade: 0.8, //遮罩
    anim: 3, //弹出动画
    isOutAnim: true, //关闭动画
    id: 'z-alert', //ID
    zIndex: '999999998', //层叠值 通知重要参数
    btn: ['关闭'], //按钮
    content: '<div class="layui-form">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">JS</label>' +
                    '<div class="layui-input-inline">' +
                        '<input type="text" class="layui-input cursor-text" readonly="readonly" value="' + $js + '" />' +
                    '</div>' +
                    '<div class="layui-form-mid layui-word-aux">' +
                        '<button class="layui-btn layui-bg-black layui-btn-sm chc-copy" data-clipboard-text="' + $js + '">复制</button>' +
                    '</div>' +
                '</div>' +
            '</div>', //内容
    success: function(layero) { //成功回调
      var $btn = layero.find('.layui-layer-btn');
      var $content = layero.find('.layui-layer-content');
      $content.css('text-align', 'center');
      $content.css('padding', '15px 20px');
      $content.css('line-height', '22px');
      //$content.css('text-indent','2em');
      $content.css('border-bottom', '1px solid #e2e2e2');
      $btn.on('click',
      function() {
        layer.close($checklaydateurl);
      });
    }
  });
  form.render();
}
//*查看FlyTemplate*//
function checkflyurl($js, $title) {
  $checkflyurl = layer.open({
    type: 1, //基本层类型
    title: $title + '下载预览',
    closeBtn: false, //关闭按钮
    scrollbar: false, //屏蔽浏览器滚动条
    //offset: 'c', //坐标
    //offset: '300px', //top坐标
    moveType: 1, //拖拽模式，0或者1
    move: false, //拖拽禁止
    btnAlign: 'c', //按钮位置
    area: '800px', //宽高
    shade: 0.8, //遮罩
    anim: 3, //弹出动画
    isOutAnim: true, //关闭动画
    id: 'z-alert', //ID
    zIndex: '999999998', //层叠值 通知重要参数
    btn: ['关闭'], //按钮
    content: '<div class="layui-form">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">ZIP</label>' +
                    '<div class="layui-input-inline">' +
                        '<input type="text" class="layui-input cursor-text" readonly="readonly" value="' + $js + '" />' +
                    '</div>' +
                    '<div class="layui-form-mid layui-word-aux">' +
                        '<button class="layui-btn layui-bg-black layui-btn-sm chc-copy" onClick=\"linkjump(\'_self\',\'' + $js + '\',0);\">下载</button>' +
                    '</div>' +
                '</div>' +
            '</div>', //内容
    success: function(layero) { //成功回调
      var $btn = layero.find('.layui-layer-btn');
      var $content = layero.find('.layui-layer-content');
      $content.css('text-align', 'center');
      $content.css('padding', '15px 20px');
      $content.css('line-height', '22px');
      //$content.css('text-indent','2em');
      $content.css('border-bottom', '1px solid #e2e2e2');
      $btn.on('click',
      function() {
        layer.close($checkflyurl);
      });
    }
  });
  form.render();
}
//*目录点击*//
/*function mlonclick($id) {
  var $btn = $($id).find('.check');
  $btn.click();
}*/
//*压缩包列表*//
function GetCoslist() {
  layui.use(['layer', 'table'],
  function() {
    var table = layui.table;
    var ziplist = table.render({
      elem: '#ziplist'
      ,url: '//api.hcwl520.com.cn/GetCosLayuiZipListObjects'
      ,method: 'post'
      ,parseData: function(res){
        return {
          code: res.code
          ,msg: res.call
          ,count: res.count
          ,data: res.data.data
        };
      }
      ,limit: 999999 * 999999
      ,page: false
      ,toolbar: false
      ,totalRow: false
      //,cellMinWidth: 120
      ,cols: [[
        {type: 'numbers', fixed: 'left', sort: true, style:'cursor: text;'}
        ,{field: 'Key', title: '文件名称', minWidth: 200, sort: true, style:'cursor: text;'}
        ,{field: 'ETag', title: 'MD5校验-点击复制', minWidth: 280, sort: true, style:'cursor: pointer;', templet: '#ZipListMD5Tpl'}
        ,{field: 'LastModified', title: '上传时间', minWidth: 150, style:'cursor: text;'}
        ,{field: 'Size', title: '大小', minWidth: 80, style:'cursor: text;'}
        ,{field: 'tools', title: '操作', minWidth: 80, fixed: 'right', sort: true, style:'text-align: center;', templet: '#ZipListToolsTpl'}
      ]]
      ,skin: 'nob'
      ,size: 'sm'
    });
  });
}
//*layui列表*//
function getLayui() {
  layui.use(['layer', 'table'],
  function() {
    var table = layui.table;
    table.render({
      elem: '#LayuiList'
      ,url: '//api.hcwl520.com.cn/GetLayuiVersion'
      ,method: 'post'
      ,parseData: function(res){
        return {
          code: res.code
          ,msg: res.call
          ,count: res.count
          ,data: res.data.layui
        };
      }
      ,done: function(res) {
        //console.log(res.data);
        var $html = '';
        layui.each(res.data, function(index, item){
          //console.log(item);
          var $url = $hosts + item.name;
          var $css = $url + '/css/layui.css';
          var $js  = $url + '/layui.js';
          var $onClick = "LayuiSee('" + item.name + "', '" + $css + "', '" + $js + "')";
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>' + item.v + '</cite></a></li>';
        });
        $('#layuiuili').html($html);
      }
      ,limit: 999999 * 999999
      ,page: false
      ,toolbar: false
      ,totalRow: false
      ,cols: [[
        {type: 'numbers', fixed: 'left', sort: true, style:'text-align: center;cursor: text;'}
        ,{field:'name', minWidth: 200, title: '版本', sort: true, style:'text-align: center;cursor: text;'}
        ,{field:'time', minWidth: 200, title: '更新时间', sort: true, style:'text-align: center;cursor: text;'}
        ,{field: 'tools', title: '操作', minWidth: 80, fixed: 'right', style:'text-align: center;', templet: '#LayuiListToolsTpl'}
      ]]
    });
  });
}
//*layer列表*//
function getLayer() {
  layui.use(['layer', 'table'],
  function() {
    var table = layui.table;
    table.render({
      elem: '#LayerList'
      ,url: '//api.hcwl520.com.cn/GetLayuiVersion'
      ,method: 'post'
      ,parseData: function(res){
        return {
          code: res.code
          ,msg: res.call
          ,count: res.count
          ,data: res.data.layer
        };
      }
      ,done: function(res) {
        //console.log(res.data);
        var $html = '';
        layui.each(res.data, function(index, item){
          //console.log(item);
          var $url = $hosts + item.name;
          var $js  = $url + '/layer.js';
          var $onClick = "LayerSee('" + item.name + "', '" + $js + "')";
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>' + item.v + '</cite></a></li>';
        });
        $('#layeruili').html($html);
      }
      ,limit: 999999 * 999999
      ,page: false
      ,toolbar: false
      ,totalRow: false
      ,cols: [[
        {type: 'numbers', fixed: 'left', sort: true, style:'text-align: center;cursor: text;'}
        ,{field:'name', minWidth: 200, title: '版本', sort: true, style:'text-align: center;cursor: text;'}
        ,{field:'time', minWidth: 200, title: '更新时间', sort: true, style:'text-align: center;cursor: text;'}
        ,{field: 'tools', title: '操作', minWidth: 300, fixed: 'right', sort: true, style:'text-align: center;', templet: '#LayerListToolsTpl'}
      ]]
    });
  });
}
//*laydate列表*//
function getLayDate() {
  layui.use(['layer', 'table'],
  function() {
    var table = layui.table;
    table.render({
      elem: '#LayDateList'
      ,url: '//api.hcwl520.com.cn/GetLayuiVersion'
      ,method: 'post'
      ,parseData: function(res){
        return {
          code: res.code
          ,msg: res.call
          ,count: res.count
          ,data: res.data.laydate
        };
      }
      ,done: function(res) {
        //console.log(res.data);
        var $html = '';
        layui.each(res.data, function(index, item){
          //console.log(item);
          var $url = $hosts + item.name;
          var $js  = $url + '/laydate.js';
          var $onClick = "LayDateSee('" + item.name + "', '" + $js + "')";
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>' + item.v + '</cite></a></li>';
        });
        $('#laydateuili').html($html);
      }
      ,limit: 999999 * 999999
      ,page: false
      ,toolbar: false
      ,totalRow: false
      ,cols: [[
        {type: 'numbers', fixed: 'left', sort: true, style:'text-align: center;cursor: text;'}
        ,{field:'name', minWidth: 200, title: '版本', sort: true, style:'text-align: center;cursor: text;'}
        ,{field:'time', minWidth: 200, title: '更新时间', sort: true, style:'text-align: center;cursor: text;'}
        ,{field: 'tools', title: '操作', minWidth: 300, fixed: 'right', sort: true, style:'text-align: center;', templet: '#LayDateListToolsTpl'}
      ]]
    });
  });
}
//*Fly列表*//
function getFly() {
  layui.use(['layer', 'table'],
  function() {
    var table = layui.table;
    table.render({
      elem: '#FlyList'
      ,url: '//api.hcwl520.com.cn/GetLayuiVersion'
      ,method: 'post'
      ,parseData: function(res){
        return {
          code: res.code
          ,msg: res.call
          ,count: res.count
          ,data: res.data.fly
        };
      }
      ,done: function(res) {
        //console.log(res.data);
        var $html = '';
        layui.each(res.data, function(index, item){
          //console.log(item);
          var $url = $hosts + item.name;
          var $js  = $url + '/fly.zip';
          var $onClick = "FlySee('" + item.name + "', '" + $js + "')";
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>' + item.v + '</cite></a></li>';
        });
        $('#flyuili').html($html);
      }
      ,limit: 999999 * 999999
      ,page: false
      ,toolbar: false
      ,totalRow: false
      ,cols: [[
        {type: 'numbers', fixed: 'left', sort: true, style:'text-align: center;cursor: text;'}
        ,{field:'name', minWidth: 200, title: '版本', sort: true, style:'text-align: center;cursor: text;'}
        ,{field:'time', minWidth: 200, title: '更新时间', sort: true, style:'text-align: center;cursor: text;'}
        ,{field: 'tools', title: '操作', minWidth: 300, fixed: 'right', sort: true, style:'text-align: center;', templet: '#FlyListToolsTpl'}
      ]]
    });
  });
}
//*重构弹窗查看*//
function LayuiSee($name, $css, $js) {
  //console.log('Layui:',$name ,$css , $js);
  checklayuiurl($css, $js, $name);
}
function LayerSee($name, $js) {
  checklayerurl($js ,$name);
}
function LayDateSee($name, $js) {
  checklaydateurl($js ,$name);
}
function FlySee($name, $js) {
  checkflyurl($js ,$name);
}
//*加载回调*//
window.onload = function() {
  /*IE检测*/
  IeAdaptation();
  /*适配检测*/
  Adaptation();
  /*获取列表*/
  getLayui();
  getLayer();
  getLayDate();
  getFly();
  GetCoslist();
};
