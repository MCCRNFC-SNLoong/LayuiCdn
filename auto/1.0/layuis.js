/** layuicdn 2020-01-18 By https://www.layuicdn.com */
(function() {
  var v = 'layui'; //layui最新版本
  var e = 'layui'; //layui模块化
  var u = 'https://www.layuicdn.com/'; //layui Url
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (script && script.getAttribute('src') && script.getAttribute('src').indexOf('layui.js')>-1 && script.getAttribute('v')) {
      v = script.getAttribute('v');
      if (v != 'layui') {
        v = 'layui-v' + v;
      }
    }
    if (script && script.getAttribute('src') && script.getAttribute('src').indexOf('layui.js')>-1 && script.getAttribute('e')) {
      e = script.getAttribute('e');
      if (e != 'layui' && e != 'layui.all') {
        console.error('警告:','layuicdn模块类型错误!');
      }
    }
  }
  var css = '<link rel="stylesheet" type="text/css" href="' + u + v + '/css/layui.css" />';
  var js  = '<script type="text/javascript" src="' + u + v + '/' + e + '.js"></script>';
  document.writeln(css + js);
})();