
/*! layer demo */

;!function(){
 

var gather = {
  htdy: $('html, body')
};

//全局配置
layer.config({
  //extend: 'moon/style.css'
});

  if(!0){
    $('.header .layui-nav').prepend('<li class="layui-nav-item"><a target="_blank" href="https://pro.layuicdn.com/?from=LayuiCdnDoc-v1" title="官方付费计划CDN支持无备案，新用户送30G流量">官方付费计划CDN<span class="layui-badge-dot"></span></a></li>');
    var _hmt = _hmt || [];
    (function() {
      var d = document
      ,s = d.getElementsByTagName('script')[0]
      ,bp = d.createElement('script')
      ,hm = d.createElement('script')
      ,qh = d.createElement('script')
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
      ,hm.src = 'https://hm.baidu.com/hm.js?b0d8e3c07d38fb5a6fdc153dbd231852'
      ,qh.src = 'https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba'
      ,qh.id = 'sozz'
      ,s.parentNode.insertBefore(bp, s)
      ,s.parentNode.insertBefore(hm, s)
      //,d.writeln(qh.outerHTML);
    })();
  }

//在线测试
var debug = $('#L_layerDebug'), popDebug = function(){
  var othis = $(this), top = $(window).scrollTop();
  layer.open({
    type: 1
    ,title: '在线测试'
    ,moveType: 1
    ,id: 'Lay_layer_debug'
    ,content: $('.runtest')
    ,shade: false
    ,resize: false
    ,fixed: false
    ,anim: 5
    ,maxWidth: '100%'
    ,offset: [
      (othis.offset().top - top + 50) + 'px'
      ,(othis.offset().left - 570) + 'px'
    ]
  });
  testmain.focus();
};
debug.on('click', popDebug);

$('#LAY_version').html(layer.v);

//在textarea焦点处插入字符
var focusInsert = function(str){
  var start = this.selectionStart
  ,end = this.selectionEnd
  ,offset = start + str.length

  this.value = this.value.substring(0, start) + str + this.value.substring(end);
  this.setSelectionRange(offset, offset);
};

//演示页面
$('body').on('keydown', '.site-demo-text', function(e){
  var key = e.keyCode;
  if(key === 9 && window.getSelection){
    e.preventDefault();
    focusInsert.call(this, '  ');
  }
});

//一睹为快
gather.demo1 = $('#demo1');
$('#chutiyan>a').on('click', function(){
  var othis = $(this), index = othis.index();
  switch(index){
    case 0:
      var icon = -1;
      (function changeIcon(){
        var index = layer.alert('Hi，你好！ 点击确认更换图标', {
          icon: icon,
          shadeClose: true,
          title: icon === -1 ? 'Alert' : ('icon: '+ icon)
        }, changeIcon);
        if(8 === ++icon) layer.close(index);
      }());
    break;
    case 1:
      
    break;
    
    case 2:
      //询问框
      layer.confirm('一个询问层的测试示例？', {
        btn: ['确定','关闭'] //按钮
      }, function(){
        layer.msg('第一个回调', {icon: 1});
      }, function(){
        layer.msg('第二个回调', {
          time: 20000, //20s后自动关闭
          btn: ['明白了', '知道了']
        });
      });
    break;
    
    case 3:
      //提示层
      layer.msg('一段提示信息');
    break;
    
    case 4:
      //墨绿深蓝风
      layer.alert('墨绿风格，点击确认看深蓝', {
        skin: 'layui-layer-molv' //样式类名
        ,closeBtn: 0
      }, function(){
        layer.alert('深蓝', {
          skin: 'layui-layer-lan'
          ,closeBtn: 0
          ,anim: 4 //动画类型
        });
      });
    break;
   
    case 5:
      //捕获页
      layer.open({
        type: 1,
        shade: false,
        //title: false, //不显示标题
        content: $('.layer_notice'), //捕获的元素
        end: function(){
          layer.msg('关闭的回调', {icon:6});
        }
      });
    break;
    
    case 6:
      //页面层
      layer.open({
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['420px', '240px'], //宽高
        content: '<div style="padding: 10px;">任意 HTML 内容</div>'
      });
    break;
    
    case 7:
      layer.open({
        type: 1,
        skin: 'layui-layer-demo',
        closeBtn: false,
        area: '350px',
        anim: 2,
        shadeClose: true,
        content: '<div style="padding:20px;">即设定参数 skin: "样式名"<br>然后在 css 中对层样式进行自定义<br><br><br>测试内容</div>'
      });
    break;
    
    case 8:
      layer.tips('一个 tips', this);
    break;
    
    case 9:
      //iframe层
      layer.open({
        type: 2,
        title: 'iframe test',
        shadeClose: true,
        shade: 0.8,
        area: ['380px', '90%'],
        content: 'https://www.layuicdn.com/' //iframe的url
      }); 
    break;
    
    case 10:
      //iframe窗
      layer.open({
        type: 2,
        title: '很多时候，我们想最大化看，比如像这个页面。',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['893px', '600px'],
        content: 'https://www.layuicdn.com/'
      });
    break;
    
    case 11:
      var ii = layer.load(0, {shade: false});
      setTimeout(function(){
        layer.close(ii)
      }, 5000);
    break;
    case 12:
      var iii = layer.load(1, {
        shade: [0.1,'#fff']
      });
      setTimeout(function(){
        layer.close(iii)
      }, 3000);
    break;
    case 13:
      layer.tips('一个 tips，<br>自定义了弹出方向以及背景色', this, {
        tips: [1, '#3595CC'],
        time: 4000
      });
    break;
    case 14:
      layer.prompt({title: '任意测试口令，并确认', formType: 1}, function(pass, index){
        layer.close(index);
        layer.prompt({title: '随便写点啥，并确认', formType: 2}, function(text, index){
          layer.close(index);
          alert('演示完毕！您填写的测试口令为：'+ pass +'<br>您最后写下了：'+ text);
        });
      });
    break;
    case 15:
      layer.tab({
        area: ['600px', '300px'],
        tab: [{
          title: 'Title1', 
          content: '<div style="padding:20px; line-height:30px; text-align:center">一个自带简单 tab 的层</div>'
        }, {
          title: 'Title2', 
          content: '<div style="padding:20px;">tabs content 2</div>'
        }, {
          title: 'Title3', 
          content: '<div style="padding:20px;">tabs content 3</div>'
        }]
      });
    break;
    case 16:
      if(gather.photoJSON){
        layer.photos({
          photos: gather.photoJSON
        });
      } else {
        $.getJSON('test/photos.json?v='+new Date, {}, function(json){
          gather.photoJSON = json;
          layer.photos({
            photos: json
          });
        });
      }
    break;
    case 17:
      layer.alert('在标题栏显示自动关闭倒计秒数', {
        time: 5*1000
        ,success: function(layero, index){
          var timeNum = this.time/1000, setText = function(start){
            layer.title('<span class="layui-font-red">'+ (start ? timeNum : --timeNum) + '</span> 秒后关闭', index);
          };
          setText(!0);
          this.timer = setInterval(setText, 1000);
          if(timeNum <= 0) clearInterval(this.timer);
        }
        ,end: function(){
          clearInterval(this.timer);
        }
      });
    break;
    default:
     //layer.msg('Hi!');
    break;
  }
  
  //定位到对应的
  var p = gather.demo1.find('p').eq(index);
  var top = p.parent().position().top;
  var ol = gather.demo1.find('.layui-code-ol');
  
  gather.demo1.find('.layui-code-ol').animate({
    scrollTop: ol.scrollTop() + top
  }, 0);
});

//一往而深
$('#demore').on('click', function(){
  gather.htdy.animate({scrollTop : $('#yiwang').offset().top}, 200);
});
gather.demo2 = $('#demo2');
$('.layer-demolist').on('click', function(){
  var othis = $(this), index = othis.index('.layer-demolist');
  switch(index){
    case 0:
      //信息框-例1
      layer.alert('见到你真的很高兴', {icon: 6});
    break;
    case 1:
      //信息框-例2
      layer.msg('一个询问测试？', {
        time: 0 //不自动关闭
        ,btn: ['确定', '关闭']
        ,yes: function(index){
          layer.close(index);
          layer.msg('自定义按钮', {
            icon: 6
            ,time: 0
            ,btn: ['按钮-1','按钮-2','按钮-3']
          });
        }
      });
    break;
    case 2:
      //信息框-例3
      layer.msg('常用提示');
    break;
    case 3:
      //信息框-例4
      layer.msg('常用提示', {icon: 5});

    break;
    case 4:
      //信息框-例5
      layer.msg('常用提示', function(){
      //关闭后的操作
      });
    break;
    case 5:
      //页面层-自定义
      layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        skin: 'yourclass',
        content: '自定义 HTML 内容'
      });
    break;
    case 6:
      //页面层-图片
      layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        area: ['auto'],
        skin: 'layui-layer-nobg', //没有背景色
        shadeClose: true,
        content: $('#tong'),
        success: function(){
          layer.msg('如果只是单纯弹出图片，一个建议用 layer.photos 层', {
            offset: '15px',
            icon: 0
          });
        }
      });
    break;
    case 7:
      //iframe层-父子操作
      layer.open({
        type: 2,
        area: ['700px', '450px'],
        fixed: false, //不固定
        maxmin: true,
        content: './test/iframe.html'
      });
    break;
    case 8:
      //iframe层-多媒体
      layer.open({
        type: 2,
        title: false,
        area: ['630px', '360px'],
        shade: 0.8,
        closeBtn: 0,
        shadeClose: true,
        content: '//player.youku.com/embed/XMzI1NjQyMzkwNA=='
      });
      layer.msg('点击任意处关闭');
    break;
    case 9:
      //iframe层-禁滚动条
      layer.open({
        type: 2,
        area: ['360px', '500px'],
        skin: 'layui-layer-rim', //加上边框
        content: ['./test/1.html', 'no']
      });
    break;
    case 10:
      //加载层-默认风格
      layer.load();
      //此处演示关闭
      setTimeout(function(){
        layer.closeAll('loading');
      }, 2000);
    break;
    case 11:
      //加载层-风格2
      layer.load(1);
      //此处演示关闭
      setTimeout(function(){
        layer.closeAll('loading');
      }, 2000);
    break;
    case 12:
      //加载层-风格3
      layer.load(2);
      //此处演示关闭
      setTimeout(function(){
        layer.closeAll('loading');
      }, 2000);
    break;
    case 13:
      //加载层-风格4
      layer.msg('加载中', {
        icon: 16
        ,shade: 0.01
      });
    break;
    case 14:
      //打酱油
      layer.msg('提示信息', {icon: 4});
    break;
    case 15:
      layer.tips('上', this, {
        tips: [1, '#000']
      });
    break;
    case 16:
      layer.tips('默认就是向右的', this);
    break;
    case 17:
      layer.tips('下', this, {
        tips: 3
      });
    break;
    case 18:
      layer.tips('左', this, {
        tips: [4, '#78BA32']
      });
    break;
    case 19:
      layer.tips('不会销毁之前的', this, {tipsMore: true});
    break;
    case 20:
      //默认prompt
      layer.prompt(function(val, index){
        layer.msg('得到了'+val);
        layer.close(index);
      });
    break;
    case 21:
      //屏蔽浏览器滚动条
      layer.open({
        content: '浏览器滚动条已锁',
        scrollbar: false
      });
    break;
    case 22:
      //弹出即全屏
      var index = layer.open({
        type: 2,
        content: 'https://www.layuicdn.com/',
        area: ['320px', '195px'],
        maxmin: true
      });
      layer.full(index);
    break;
    case 23:
      //正上方
      layer.msg('灵活运用 offset', {
        offset: 't',
        anim: 6
      });
    break;
    default:
      layer.msg('Hi!');
    break;
  }
  
  //定位到对应的
  var p = gather.demo2.find('p').eq(index);
  var top = p.parent().position().top;
  var ol = gather.demo2.find('.layui-code-ol');
  
  gather.demo2.find('.layui-code-ol').animate({
    scrollTop: ol.scrollTop() + top
  }, 0);
});

//API页
gather.api = $('.layer-api');
gather.apiRun = $('.layer-api-run');
(function(){
  var lis = gather.api.find('li'), slecked = 'layer-api-slecked';
  lis.on('click', function(){
    lis.removeClass(slecked);
    $(this).addClass(slecked);
  });
  gather.api.find('h2').on('click', function(){
    var othis = $(this), i = othis.find('.layer-api-ico');
    if(i.hasClass('icon-shousuo')){
      i.addClass('icon-zhankai').removeClass('icon-shousuo');
      othis.next().hide();
      
    } else {
      i.addClass('icon-shousuo').removeClass('icon-zhankai');
      othis.next().show();
    }
  });
  layer.ready(function(){
    layer.photos({
      photos: '#layer-photos-demo'
    });
  });
}());


//窗口scroll
(function(){
  var conf = {};
  conf.log = 0;
  $(window).on('scroll', function(){
    var stop = $(window).scrollTop();
    if(stop >= 60){
      if(!conf.log){
        conf.log = 1;
        gather.api.addClass('layer-api-fix');
        gather.apiRun.css('top', 0);
      }
    } else {
      if(conf.log){
        conf.log = 0;
        gather.api.removeClass('layer-api-fix');
        gather.apiRun.css('top', '60px');
      }
    }
    stop = null;
  });
}());

gather.getDate = function(time){ 
  return new Date(parseInt(time)).toLocaleString() 
};


layui.use(['util', 'code', 'element'], function(){
  var util = layui.util;
  
  //固定块
  util.fixbar({
    bar1: false
    ,click: function(type){
      
    }
  });
  
  //代码修饰器
  layui.code();
  
});
  
}();