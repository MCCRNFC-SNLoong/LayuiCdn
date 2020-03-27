//*初始化全局渲染*//
$ = layui.$
,form = layui.form
,util = layui.util
,tree = layui.tree
,rate = layui.rate
,layer = layui.layer
,table = layui.table
,slider = layui.slider
,laytpl = layui.laytpl
,upload = layui.upload
,element = layui.element
,laydate = layui.laydate
,laypage = layui.laypage
,layedit = layui.layedit
,device = layui.device()
,transfer = layui.transfer
,carousel = layui.carousel
,colorpicker = layui.colorpicker; //Sorry 我并不想这样写
//*构造链接*//
function linkjump($type, $link, $rurl) {
  if ($rurl == 0) {
    layer.msg('正在为您跳转...', {
      icon: 16
      ,time: 500
    } ,function() {
      window.open($link, $type);
    });
  } else {
    layer.msg('正在为您跳转...', {
      icon: 16
      ,time: 500
    } ,function() {
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
  $Chc_Copy = new Clipboard('.chc-copy');
  $Chc_Copy.on('success', function(e) {
    layer.msg('复制成功，已成功复制到粘贴板！', {
      anim: 0,
      time: 2000,
      offset: 't',
      shade: 0
    });
  });
  $Chc_Copy.on('error', function(e) {
    layer.msg('复制失败，请升级您的浏览器！', {
      anim: 6,
      time: 2000,
      offset: 't',
      shade: [0.8, '#000']
    });
  });
}
//*加载回调*//
window.onload = function() {
  /*IE检测*/
  IeAdaptation();
  /*适配检测*/
  Adaptation();
  //if ($path == '/' || $path == '/index.html') {
    /*获取列表*/
    //getLayui();
    //getLayer();
    //getLayDate();
    //getFly();
    //GetCoslist();
    //GetSponsor();
  //}
};
