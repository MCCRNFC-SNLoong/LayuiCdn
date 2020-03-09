/** LayuiCdn 2020-03-09 By https://www.layuicdn.com */
(function() {
  var d = document
  ,i = d.getElementsByTagName('script')
  ,i = i[i.length -1] //DOM
  ,u = i.src.split('auto')[0] //Url
  ,c = d.createElement('link')
  ,j = d.createElement('script')
  ,v = i.getAttribute('v') || 'layui'
  ,e = i.getAttribute('e') || 'layui';
  ['layui','layui.all'].indexOf(e) == -1 //Layui模块化
  ? console.error('警告:','LayuiCdn模块类型错误!')
  : v != 'layui' ? v = 'layui-v' + v : v //Layui版本化
    ,c.type = 'text/css'
    ,c.rel  = 'stylesheet'
    ,c.href = u + v + '/css/layui.css'
    ,c = c.outerHTML
    ,j.type = 'text/javascript'
    ,j.src  = u + v + '/' + e +'.js'
    ,j = j.outerHTML
    ,d.writeln(c, j);
})();