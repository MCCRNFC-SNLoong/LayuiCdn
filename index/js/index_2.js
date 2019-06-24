//*初始化全局渲染*//
layui.config({
  version: $update_Time //缓存
}),layui.use(['code', 'element', 'table', 'util'],
function() {
  element = layui.element,
  form = layui.form,
  table = layui.table,
  util = layui.util;
  //搜索组件
  form.on('select(component)',
  function(data) {
    var $value = data.value;
    //location.href = $value;
      linkjump('_self',$value,0);
  });
  //切换版本
  form.on('select(tabVersion)',
  function(data) {
    var $value = data.value;
    //location.href = $value === 'index' ? './': ('./' + $value + '/doc/');
    if ($value === 'index') {
        linkjump('_self','./');
    } else {
        linkjump('_self','/' + $value + '/');
    }
  });
  //*工具条*//
  util.fixbar({
    bar1: '&#xe68e;',
    bgcolor: '#292a2b',
    click: function(type) {
      if (type === 'bar1') {
          linkjump('_self','http://www.layui.com/');
      }
    }
  });
  //窗口scroll
  ;!function() {
    var main = $('.site-tree').parent(),
    scroll = function() {
      var stop = $(window).scrollTop();
      if ($(window).width() <= 750) return;
      var bottom = $('.footer').offset().top - $(window).height();
      if (stop > 61 && stop < bottom) {
        if (!main.hasClass('site-fix')) {
          main.addClass('site-fix');
        }
        if (main.hasClass('site-fix-footer')) {
          main.removeClass('site-fix-footer');
        }
      } else if (stop >= bottom) {
        if (!main.hasClass('site-fix-footer')) {
          main.addClass('site-fix site-fix-footer');
        }
      } else {
        if (main.hasClass('site-fix')) {
          main.removeClass('site-fix').removeClass('site-fix-footer');
        }
      }
      stop = null;
    };
    scroll();
    $(window).on('scroll', scroll);
  } ();
  //代码修饰
  layui.code({
    elem: 'pre',
    about: false
  });
  //目录
  var siteDir = $('.site-dir');
  if (siteDir[0] && $(window).width() > 750) {
    layer.ready(function() {
      layer.open({
        type: 1,
        content: siteDir,
        skin: 'layui-layer-dir',
        area: ['150px', '80%'],
        //maxHeight: $(window).height() - 150,
        title: '目录',
        //closeBtn: false,
        offset: 'r',
        shade: false,
        success: function(layero, index) {
          layer.style(index, {
            marginLeft: -15
          });
        }
      });
    });
    siteDir.find('li').on('click',
    function() {
      var othis = $(this);
      othis.find('a').addClass('layui-this');
      othis.siblings().find('a').removeClass('layui-this');
    });
  }

});
//*LAYUI END*//
