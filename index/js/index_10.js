//*初始化静默身份验证*//
var $TableName = 'user';
if (location.search.substr(1).length == 32) {
  layui.data($TableName, {
    key: 'token'
    ,value: location.search.substr(1)
  });
  layer.closeAll();
  top.location.href = $path;
} else if (location.search.substr(1) == -1) {
  layer.msg('登录失败，请重新登录', {
    anim: 6
    ,time: 2000
    ,offset: 't'
  });
}
LayuiCdnLogin = function (callback) {
  var $user = layui.data($TableName);
  if (!$.isEmptyObject($user)) {
    layer.load(2,{offset: 't'});
    $.ajax({
      url: $api + 'LayuiCdnUserVerify'
      ,type: 'post'
      ,data: {
        token: $user.token
      }
      ,timeout: 10000
      ,dataType: 'json'
      ,success: function(data) {
        if (data.code == 0 && data.msg == '20000' && data.call == 'success') {
          layui.data($TableName, {
            key: 'username'
            ,value: data.data.data.username
          });
          layui.data($TableName, {
            key: 'userlogo'
            ,value: data.data.data.userlogo
          });
          if(typeof callback == 'function') {
            callback(layui.data($TableName));
          }
        } else if (data.code == -1) {
          layui.data($TableName, null); 
          layer.msg(data.call, {
            anim: 6
            ,time: 1500
            ,offset: 't'
          }, function() {
            location.reload();
          });
        } else {
          layer.msg(data.call, {
            anim: 6
            ,time: 2000
            ,offset: 't'
          }, function() {
            location.reload();
          });
        }
      }
      ,error: function() {
        layui.data($TableName, null);
        layer.closeAll('loading');
        layer.msg('请求失败，请重试！', {
          anim: 6
          ,time: 1500
          ,offset: 't'
        }, function() {
          location.reload();
        });
      }
      ,complete: function() {
        layer.closeAll('loading');
      }
    });
  } else {
    var $rurl = Base64.encode($protocol + '//' + $host + $path);
     layer.msg('正在为您跳转登录...', {
     icon: 16
     ,time: 500
     } ,function() {
       layer.open({
         type: 2
         ,title: 'QQ登录'
         ,maxmin: true
         ,skin: 'layui-layer-qq-login'
         ,anim: 2
         ,area: ['50%', '55%']
         ,shadeClose: true
         ,content: $api + 'QqLogin?rurl=' + $rurl + '&type=layuicdn&token=' + new Date().getTime()
       });
     });
  }
  if(typeof callback == 'function') {
    callback(layui.data($TableName));
  }
}