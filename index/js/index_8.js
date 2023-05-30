//*初始化首页index独立*//
//*查看Layui*//
function checklayuiurl($css, $js, $title) {
  $checklayuiurl = layer.open({
    type: 1
    ,title: $title + '引入预览'
    ,closeBtn: false
    ,scrollbar: false
    //,offset: 'c'
    //,offset: '300px'
    ,moveType: 1
    ,move: false
    ,btnAlign: 'c'
    ,area: '800px'
    ,shade: 0.8
    ,anim: 3
    ,isOutAnim: true
    ,id: 'z-alert'
    //,zIndex: '999999998'
    ,btn: ['关闭']
    ,content: '<div class="layui-form">' +
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
            '</div>'
    ,success: function(layero) {
      form.render();
      var $btn = layero.find('.layui-layer-btn');
      var $content = layero.find('.layui-layer-content');
      $content.css('text-align', 'center');
      $content.css('padding', '15px 20px');
      $content.css('line-height', '22px');
      //$content.css('text-indent','2em');
      $content.css('border-bottom', '1px solid #e2e2e2');
      $btn.on('click', function() {
        layer.close($checklayuiurl);
      });
    }
  });
}
//*查看Layer*//
function checklayerurl($js, $title) {
  $checklayerurl = layer.open({
    type: 1
    ,title: $title + '引入预览'
    ,closeBtn: false
    ,scrollbar: false
    //,offset: 'c'
    //,offset: '300px'
    ,moveType: 1
    ,move: false
    ,btnAlign: 'c'
    ,area: '800px'
    ,shade: 0.8
    ,anim: 3
    ,isOutAnim: true
    ,id: 'z-alert'
    //,zIndex: '999999998'
    ,btn: ['关闭']
    ,content: '<div class="layui-form">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">JS</label>' +
                    '<div class="layui-input-inline">' +
                        '<input type="text" class="layui-input cursor-text" readonly="readonly" value="' + $js + '" />' +
                    '</div>' +
                    '<div class="layui-form-mid layui-word-aux">' +
                        '<button class="layui-btn layui-bg-black layui-btn-sm chc-copy" data-clipboard-text="' + $js + '">复制</button>' +
                    '</div>' +
                '</div>' +
            '</div>'
    ,success: function(layero) {
      form.render();
      var $btn = layero.find('.layui-layer-btn');
      var $content = layero.find('.layui-layer-content');
      $content.css('text-align', 'center');
      $content.css('padding', '15px 20px');
      $content.css('line-height', '22px');
      //$content.css('text-indent','2em');
      $content.css('border-bottom', '1px solid #e2e2e2');
      $btn.on('click', function() {
        layer.close($checklayerurl);
      });
    }
  });
}
//*查看LayDate*//
function checklaydateurl($js, $title) {
  $checklaydateurl = layer.open({
    type: 1
    ,title: $title + '引入预览'
    ,closeBtn: false
    ,scrollbar: false
    //,offset: 'c'
    //,offset: '300px'
    ,moveType: 1
    ,move: false
    ,btnAlign: 'c'
    ,area: '800px'
    ,shade: 0.8
    ,anim: 3
    ,isOutAnim: true
    ,id: 'z-alert'
    //,zIndex: '999999998'
    ,btn: ['关闭']
    ,content: '<div class="layui-form">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">JS</label>' +
                    '<div class="layui-input-inline">' +
                        '<input type="text" class="layui-input cursor-text" readonly="readonly" value="' + $js + '" />' +
                    '</div>' +
                    '<div class="layui-form-mid layui-word-aux">' +
                        '<button class="layui-btn layui-bg-black layui-btn-sm chc-copy" data-clipboard-text="' + $js + '">复制</button>' +
                    '</div>' +
                '</div>' +
            '</div>'
    ,success: function(layero) {
      form.render();
      var $btn = layero.find('.layui-layer-btn');
      var $content = layero.find('.layui-layer-content');
      $content.css('text-align', 'center');
      $content.css('padding', '15px 20px');
      $content.css('line-height', '22px');
      //$content.css('text-indent','2em');
      $content.css('border-bottom', '1px solid #e2e2e2');
      $btn.on('click', function() {
        layer.close($checklaydateurl);
      });
    }
  });
}
//*查看FlyTemplate*//
function checkflyurl($js, $title) {
  $checkflyurl = layer.open({
    type: 1
    ,title: $title + '下载预览'
    ,closeBtn: false
    ,scrollbar: false
    //,offset: 'c'
    //,offset: '300px'
    ,moveType: 1
    ,move: false
    ,btnAlign: 'c'
    ,area: '800px'
    ,shade: 0.8
    ,anim: 3
    ,isOutAnim: true
    ,id: 'z-alert'
    //,zIndex: '999999998'
    ,btn: ['关闭']
    ,content: '<div class="layui-form">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">ZIP</label>' +
                    '<div class="layui-input-inline">' +
                        '<input type="text" class="layui-input cursor-text" readonly="readonly" value="' + $js + '" />' +
                    '</div>' +
                    '<div class="layui-form-mid layui-word-aux">' +
                        '<button class="layui-btn layui-bg-black layui-btn-sm chc-copy" onClick=\"linkjump(\'_self\',\'' + $js + '\',0);\">下载</button>' +
                    '</div>' +
                '</div>' +
            '</div>'
    ,success: function(layero) {
      form.render();
      var $btn = layero.find('.layui-layer-btn');
      var $content = layero.find('.layui-layer-content');
      $content.css('text-align', 'center');
      $content.css('padding', '15px 20px');
      $content.css('line-height', '22px');
      //$content.css('text-indent','2em');
      $content.css('border-bottom', '1px solid #e2e2e2');
      $btn.on('click', function() {
        layer.close($checkflyurl);
      });
    }
  });
}
//*目录点击*//
/*function mlonclick($id) {
  var $btn = $($id).find('.check');
  $btn.click();
}*/
//*压缩包列表*//
function GetCoslist() {
  var ziplist = table.render({
    elem: '#ziplist'
    ,method: 'post'
    ,url: $api + 'GetCosLayuiZipListObjects'
    ,title: 'layui列表'
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
    ,skin: 'line'
    ,even: true
    ,toolbar: false
    ,totalRow: false
    //,cellMinWidth: 120
    ,cols: [[
      {type: 'numbers', fixed: 'left', sort: true, style:'cursor: text;'}
      ,{field: 'Key', title: '文件名称', minWidth: 200, sort: true, style:'cursor: text;'}
      ,{field: 'ETag', title: 'MD5校验-点击复制', minWidth: 280, style:'cursor: pointer;', templet: '#ZipListMD5Tpl'}
      ,{field: 'LastModified', title: '上传时间', minWidth: 170, style:'cursor: text;'}
      ,{field: 'Size', title: '大小', minWidth: 80, style:'cursor: text;'}
      ,{field: 'tools', title: '操作', minWidth: 125, fixed: 'right', style:'text-align: center;', templet: '#ZipListToolsTpl'}
    ]]
    ,skin: 'nob'
    ,size: 'sm'
  });
}
//*layui列表*//
function getLayui() {
  table.render({
    elem: '#LayuiList'
    ,title: 'layui列表'
    ,data: GetLayuiVersion('layui')
    ,limit: GetLayuiVersion('layui').length
    ,done: function(res) {
      var $html = '';
      layui.each(res.data, function(index, item){
        var $url = $hosts + item.name;
        var $css = $url + '/css/layui.css';
        var $js  = $url + '/layui.js';
        var $onClick = "LayuiSee('" + item.name + "', '" + $css + "', '" + $js + "')";
        if (item.name == 'layui') {
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>最新版</cite></a></li>';
        } else {
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>' + item.v + '</cite></a></li>';
        }
      });
      $('#layuiuili').html($html);
    }
    ,page: false
    ,skin: 'line'
    ,even: true
    ,toolbar: false
    ,totalRow: false
    ,cols: [[
      {type: 'numbers', fixed: 'left', sort: true, style:'text-align: center;cursor: text;'}
      ,{field:'name', minWidth: 200, title: '版本', sort: true, style:'text-align: center;cursor: text;', templet: '#LayuiListNewest'}
      ,{field:'time', minWidth: 200, title: '更新时间', sort: true, style:'text-align: center;cursor: text;'}
      ,{field: 'tools', title: '操作', minWidth: 80, fixed: 'right', style:'text-align: center;', templet: '#LayuiListToolsTpl'}
    ]]
  });
}
//*layer列表*//
function getLayer() {
  table.render({
    elem: '#LayerList'
    ,title: 'layer列表'
    ,data: GetLayuiVersion('layer')
    ,limit: GetLayuiVersion('layer').length
    ,done: function(res) {
      var $html = '';
      layui.each(res.data, function(index, item){
        var $url = $hosts + item.name;
        var $js  = $url + '/layer.js';
        var $onClick = "LayerSee('" + item.name + "', '" + $js + "')";
        if (item.name == 'layer') {
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>最新版</cite></a></li>';
        } else {
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>' + item.v + '</cite></a></li>';
        }
      });
      $('#layeruili').html($html);
    }
    ,page: false
    ,skin: 'line'
    ,even: true
    ,toolbar: false
    ,totalRow: false
    ,cols: [[
      {type: 'numbers', fixed: 'left', sort: true, style:'text-align: center;cursor: text;'}
      ,{field:'name', minWidth: 200, title: '版本', sort: true, style:'text-align: center;cursor: text;', templet: '#LayerListNewest'}
      ,{field:'time', minWidth: 200, title: '更新时间', sort: true, style:'text-align: center;cursor: text;'}
      ,{field: 'tools', title: '操作', minWidth: 300, fixed: 'right', sort: true, style:'text-align: center;', templet: '#LayerListToolsTpl'}
    ]]
  });
}
//*laydate列表*//
function getLayDate() {
  table.render({
    elem: '#LayDateList'
    ,title: 'laydate列表'
    ,data: GetLayuiVersion('laydate')
    ,limit: GetLayuiVersion('laydate').length
    ,done: function(res) {
      var $html = '';
      layui.each(res.data, function(index, item){
        var $url = $hosts + item.name;
        var $js  = $url + '/laydate.js';
        var $onClick = "LayDateSee('" + item.name + "', '" + $js + "')";
        if (item.name == 'layDate') {
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>最新版</cite></a></li>';
        } else {
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>' + item.v + '</cite></a></li>';
        }
      });
      $('#laydateuili').html($html);
    }
    ,page: false
    ,skin: 'line'
    ,even: true
    ,toolbar: false
    ,totalRow: false
    ,cols: [[
      {type: 'numbers', fixed: 'left', sort: true, style:'text-align: center;cursor: text;'}
      ,{field:'name', minWidth: 200, title: '版本', sort: true, style:'text-align: center;cursor: text;', templet: '#LayDateListNewest'}
      ,{field:'time', minWidth: 200, title: '更新时间', sort: true, style:'text-align: center;cursor: text;'}
      ,{field: 'tools', title: '操作', minWidth: 300, fixed: 'right', sort: true, style:'text-align: center;', templet: '#LayDateListToolsTpl'}
    ]]
  });
}
//*Fly列表*//
function getFly() {
  table.render({
    elem: '#FlyList'
    ,title: 'Fly列表'
    ,data: GetLayuiVersion('fly')
    ,limit: GetLayuiVersion('fly').length
    ,done: function(res) {
      var $html = '';
      layui.each(res.data, function(index, item){
        var $url = $hosts + item.name;
        var $js  = $url + '/fly.zip';
        var $onClick = "FlySee('" + item.name + "', '" + $js + "')";
        if (item.name == 'fly') {
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>最新版</cite></a></li>';
        } else {
          $html += '<li><a href="#' + item.name + '" onClick="' + $onClick + '"><cite>' + item.v + '</cite></a></li>';
        }
      });
      $('#flyuili').html($html);
    }
    ,page: false
    ,skin: 'line'
    ,even: true
    ,toolbar: false
    ,totalRow: false
    ,cols: [[
      {type: 'numbers', fixed: 'left', sort: true, style:'text-align: center;cursor: text;'}
      ,{field:'name', minWidth: 200, title: '版本', sort: true, style:'text-align: center;cursor: text;', templet: '#FlyListNewest'}
      ,{field:'time', minWidth: 200, title: '更新时间', sort: true, style:'text-align: center;cursor: text;'}
      ,{field: 'tools', title: '操作', minWidth: 300, fixed: 'right', sort: true, style:'text-align: center;', templet: '#FlyListToolsTpl'}
    ]]
  });
}
//*赞助Open*//
function Sponsor() {
  var $content = '<div style="padding: 15px; text-align: center; background-color: #fff;">'
               + '  <img src="./index/images/sponsor.png" style="width: 100%;" alt="Layuicdn" />'
               + '  <div class="layui-text" style="margin-top: 10px;">'
               + '    <span>'
               + '      韩信尚且能受胯下蒲伏，免费项目欲要生存，又何须假装圣人。'
               + '    </span>'
               + '    <br />'
               + '    <i class="layui-icon layui-icon-face-smile" style="font-size: 14px;color: #33CC99;"></i>'
               + '    <span>'
               + '      无论您赞助捐赠与否，看到此处都是给予我们最真挚的肯定。鸣谢！'
               + '    </span>'
               + '    <br />'
               + '    <span>'
               + '      我们并非行乞者，却并不拒绝赏识，单次赞助99元或以上可获得左侧广告位30天。'
               + '    </span>'
               + '    <br />'
               + '    <span>'
               + '      如果您赞助捐赠后或广告位事宜，请联系我们管理员-夏新龙 WeChat：'
               + '      <a class="chc-copy cursor-pointer" data-clipboard-text="xxl15110220250">'
               + '        xxl15110220250'
               + '      </a>'
               + '    </span>'
               + '  </div>'
               + '</div>';
  layer.open({
    type: 1
    //,btn: '关闭'
    ,id: 'Sponsor'
    ,closeBtn: 1
    //,btnAlign: 'c'
    ,area: ['600px', '460px']
    //,shade: false
    ,resize: false
    ,scrollbar: false
    ,content: $content
    ,shadeClose : false
    ,title: 'LayuiCdn赞助广告'
    ,success: function(layero, index) {
      var $title = layero.find('.layui-layer-title');
      $($title).css('border', 'none');
      $($title).css('background-color', '#fff');
    }
    ,end: function() {
      layer.msg('感谢您的赏识', {
        icon: 6
        ,time: 2000
      });
    }
  });
}
//*赞助List*//
function SponsorList() {
  layer.open({
    type: 1
    //,btn: '关闭'
    ,id: 'Sponsors'
    ,closeBtn: 1
    //,btnAlign: 'c'
    ,area: ['800px', '500px']
    //,shade: false
    ,resize: false
    ,scrollbar: false
    ,content: '<table class="layui-hide" id="sponsor-list" lay-filter="sponsor-list"></table>'
    ,shadeClose : false
    ,title: 'LayuiCdn赞助墙<span class="title_tprice"></span>'
    ,success: function(layero, index) {
      var $title = layero.find('.layui-layer-title');
      $($title).css('border', 'none');
      $($title).css('background-color', '#fff');
      table.render({
        elem: '#sponsor-list'
        ,method: 'post'
        ,url: $api + 'GetLayuiCdnSponsors'
        ,title: 'LayuiCdn赞助列表'
        ,parseData: function(res){
          return {
            code: res.code
            ,msg: res.call
            ,count: res.count
            ,tprice: res.data.tprice
            ,data: res.data.data
          };
        }
        ,cols: [[
          {field: 'name', title: '赞助者', align: 'center', width: 120}
          ,{field: 'price', title: '金额', align: 'right', width: 100, templet: function(d){
            return '<div><span class="ys-red">' + d.price + '&nbsp;元</span></div>'
          }}
          ,{field: 'desc', title: '留言', align: 'center', width: 290}
          ,{field: 'type', title: '方式', align: 'center', width: 100, templet: function(d){
            var $type;
            if (d.type == 1) {
              $type = '支付宝';
            } else if (d.type == 2) {
              $type = '微信';
            } else {
              $type = '其他渠道';
            }
            return '<div><span>' + $type + '</span></div>'
          }}
          ,{field: 'time', title: '赞助时间', align: 'center', width: 180}
        ]]
        ,page: true
        ,skin: 'nob'
        ,even: false
        ,size: 'sm'
        ,done: function (res) {
          $title_tprice = '<span style="font-size: 12px;margin-left: 10px;">'
                        + '  赞助总额: '
                        + '    <span class="ys-red">'
                        +        res.tprice
                        + '        &nbsp;元'
                        + '    </span>'
                        + '</span>';
          layero.find('.title_tprice').html($title_tprice);
        }
      });
    }
  });
}
//*赞助商家*//
function GetSponsor() {
  $.post($api + 'GetLayuiCdnSponsor', function(res) {
    laytpl($('#SponsorTpl').html()).render(res.data, function(html) {
      $('#SponsorView').html(html);
    });
  });
}
//*自动化加载*//
function AutoLayui() {
  var $content = '<div style="padding: 15px; background-color: #fff;">'
               + '  <div class="layui-text" style="margin-top: 10px;">'
               + '    <iframe src="/auto/auto.html" frameborder="0" width="100%" height="415" scrolling="no"></iframe>'
               + '    <br />'
               + '    <blockquote class="layui-elem-quote" style="border: none !important;font-size: 13px !important; margin-bottom: 0px !important;">'
               + '      您只需要写下代码:'
               + '    </blockquote>'
               + '    <blockquote class="layui-elem-quote" style="border: none !important; margin-bottom: 0px !important;">'
               + '      <blockquote class="layui-elem-quote" style="border-left: 2px solid #FF5722 !important;font-size: 13px !important;">'
               + '        script src="https://www.layuicdn.com/auto/layui.js" v="layui"&gt;&lt;/script&gt;'
               + '    </blockquote>'
               + '    <blockquote class="layui-elem-quote" style="border: none !important;font-size: 13px !important; margin-bottom: 0px !important;">'
               + '      即可引入自动化加载layui.js模块以及layui.css'
               + '      <span class="ys-red">'
               + '        务必将代码写在面页头部代码的&lt;head&gt;&lt;/head&gt;标签内'
               + '      </span>'
               + '    </blockquote>'
               + '    <blockquote class="layui-elem-quote" style="border: none !important;font-size: 13px !important; margin-bottom: 0px !important;">'
               + '      v参数为版本, 如v="2.8.0" 即自动引入2.8.0版本的layui, 如值为 layui 或 不携带v参数 则默认为最新版本的layui 例: &lt;script src="https://www.layuicdn.com/auto/layui.js" v="2.8.0"&gt;&lt;/script&gt;'
               + '      <br />'
               + '      <br />'
               + '      <p style="color: #FF5722;">注：此模块仅支持2.6.0以下版本</p>'
               + '      e参数为模块, 如e="layui" 或 e="layui.all" 即自动引入 layui 或 layui.all 的js模块文件, 如不携带e参数则默认为layui 例: &lt;script src="https://www.layuicdn.com/auto/layui.js" e="layui.all"&gt;&lt;/script&gt;'
               + '    </blockquote>'
               + '    <blockquote class="layui-elem-quote" style="border: none !important;font-size: 13px !important; margin-bottom: 0px !important;">'
               + '      最简写法: &lt;script src="https://www.layuicdn.com/auto/layui.js"&gt;&lt;/script&gt; 自动最新版'
               + '      <br />'
               + '      建议写法: &lt;script src="https://www.layuicdn.com/auto/layui.js" v="2.8.0"&gt;&lt;/script&gt; 解析为2.8.0版本layui模块'
               + '      <br />'
               + '      <br />'
               + '      <br />'
               + '      最后, 如果您有更好的想法和建议，请联系我们管理员-夏新龙 WeChat：'
               + '      <a class="chc-copy cursor-pointer" data-clipboard-text="xxl15110220250">'
               + '        xxl15110220250'
               + '      </a>'
               + '    </blockquote>'
               + '  </div>'
               + '</div>';
  layer.open({
    type: 1
    ,id: 'AutoLayui'
    ,closeBtn: 1
    ,area: ['100%', '100%']
    ,shade: false
    ,resize: false
    ,scrollbar: true
    ,content: $content
    ,title: 'LayuiCdn高级自动化加载模块'
    ,success: function(layero, index) {
      var $title = layero.find('.layui-layer-title');
      $($title).css('border', 'none');
      $($title).css('background-color', '#fff');
    }
  });
}
//*重构弹窗查看*//
function LayuiSee($name, $css, $js) {
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
var $layuicdn_options = {
  strings: ['2022&#x795D;&#x5927;&#x5BB6;...&#x641E;&#x9519;&#x4E86;...&#x518D;&#x6765;','&#x795D;&#x5E7F;&#x5927;&#x7528;&#x6237;&#x5728;2023&#x65B0;&#x65F6;&#x4EE3; Happy New Year&#xFF01;']
  //stringsElement: '.layuicdn-notice-strings'
  ,startDelay: 800
  ,typeSpeed: 150
};
//*二维码预加载*//
/*$('body').append('<img class="Preload-Img-Sponsor layui-hide" src="./index/images/sponsor.png" />'), setTimeout(function() {
  $('.Preload-Img-Sponsor').remove();
}, 2000);*/
window.onload = function() {
  /*获取列表*/
  var $LayuicdnNotice = new Typed(
    '.layuicdn-notice'
    ,$layuicdn_options
  );
  setTimeout(function(){
   if (!$('#LayuiList').length) {
     console.error('Not-LayuiList');
   } else if ($('#LayuiList').length > 0 && layui.table !== false) {
     getLayui();
     getLayer();
     getLayDate();
     getFly();
     GetCoslist();
     GetSponsor();
   }
  }, 500);
};
//*LAYUI END*//