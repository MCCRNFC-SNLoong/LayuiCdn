//*初始化第三方组件*//
layui.config({
  version: $update_Time
}),layui.use(['layer', 'form', 'laytpl', 'upload', 'table'], function() {
  var $ = layui.$
  ,layer = layui.layer
  ,form = layui.form
  ,laytpl = layui.laytpl
  ,upload = layui.upload
  ,table = layui.table;
  var $api = 'https://cloud.hcwl520.com.cn/oauth2.0/open/extend/';
  var $TableName = 'user';
  var $user = layui.data($TableName);
  var $index_Template = $('#Index-extend-user-Template').html();
  var $index_View = $('#Index-extend-user-View');
  if (location.search.substr(1).length == 32) {
    layui.data($TableName, {
      key: 'token'
      ,value: location.search.substr(1)
    });
    layer.closeAll();
    //parent.location.reload();
    //parent.location.href = './extend.html';
    parent.location.href = $path;
    return false;
  } else if (location.search.substr(1) == -1) {
    layer.msg('登录失败，请重新登录', {
      anim: 6
      ,time: 2000
      ,offset: 't'
    });
  }
  if (!$.isEmptyObject($user)) {
    layer.load(2,{offset: 't'});
    $.ajax({
      url: window.$api + 'LayuiCdnUserVerify'
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
          var $user = layui.data($TableName);
          laytpl($index_Template).render($user, function(html) {
            $index_View.html(html);
          });
          table.render({
            elem: '#extend-list'
            ,method: 'post'
            ,url: window.$api + 'GetLayuiCdnUserExtend'
            ,where: {
              token: $user.token
            }
            ,title: '我的组件列表'
            ,parseData: function(res){
              return {
                code: res.code
                ,msg: res.call
                ,count: res.count
                ,data: res.data.data
              };
            }
            ,cols: [[
              {field: 'name', title: '组件名', minWidth: 200}
              ,{field: 'version', title: '组件版本', minWidth: 120}
              ,{field: 'file', title: '压缩包-点击上传更新替换', width: 200, align: 'center', templet: function(d){
                return '<div><i class="layui-icon layui-icon-upload-drag upload-' + d.token + ' cursor-pointer" style="color: #1E9FFF;"></i></div>';
              }}
              ,{field: 'state', title: '状态', width: 150, align: 'center', templet: function(d){
                var $class;
                var $msg;
                if (d.state == 0) {
                  $msg   = '正常';
                  $class = 'ys-green';
                } else if (d.state == 1) {
                  $msg   = '等待上传文件';
                  $class = 'ys-orange';
                } else if (d.state == 2) {
                  $msg   = '等待审核';
                  $class = 'ys-gray';
                } else if (d.state == -1) {
                  $msg   = '审核失败';
                  $class = 'ys-red';
                }
                return '<div><span class="' + $class + '">'+ $msg +'</span></div>'
              }}
              ,{field: 'addtime', title: '提交时间', width: 170, align: 'center'}
              ,{field: 'endtime', title: '更新时间', width: 170, align: 'center'}
              ,{fixed: 'right', title: '操作', minWidth: 150, align: 'center', templet: function(d){
                var $down = '';
                if (d.file != null && d.file != '') {
                  $down = '<a class="layui-btn layui-btn-xs btn-right" target="_self" href="' + $hosts + 'extend/' + d.name + '/' + d.version + '/' + d.file + '">下载</a>';
                }
                return '<div>' + $down + '<a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a></div>';
              }}
            ]]
            ,page: true
            ,skin: 'nob'
            ,even: false
            ,size: 'sm'
            ,done: function(res) {
              layui.each(res.data, function(arr, obj) {
                upload.render({
                  elem: '.upload-' + obj.token
                  ,url: $api + 'UploadExtend.do'
                  ,method: 'post'
                  ,size: 10485760
                  ,accept: 'file'
                  ,exts: 'zip'
                  ,acceptMime: 'application/zip'
                  ,data: {
                    token: $user.token
                    ,extend_token: obj.token
                  }
                  ,before: function(obj){
                    layer.load(2,{offset: 't'});
                  }
                  ,done: function(data) {
                    layer.closeAll('loading');
                    if (data.code == 0 && data.msg == '20000' && data.call == 'success') {
                     layer.msg('上传成功', {
                       anim: 0
                       ,time: 1000
                       ,offset: 't'
                     }, function() {
                        table.reload('extend-list');
                     });
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
                      });
                    }
                  }
                });
              });
              table.on('tool(extend-list)', function(obj){
                var data = obj.data;
                if(obj.event === 'del'){
                  layer.confirm('确定删除组件：' + data.name + '&nbsp;' + data.version + '&nbsp;吗？', {title: '删除提醒'}, function(index){
                    layer.load(2,{offset: 't'});
                    $.ajax({
                      url: window.$api + 'DelLayuiCdnExtend'
                      ,type: 'post'
                      ,data: {
                        token: $user.token
                        ,extend_token: data.token
                      }
                      ,timeout: 10000
                      ,dataType: 'json'
                      ,success: function(data) {
                        layer.closeAll('loading');
                        if (data.code == 0 && data.msg == '20000' && data.call == 'success') {
                         layer.msg('删除成功', {
                           anim: 0
                           ,time: 1000
                           ,offset: 't'
                         }, function() {
                           obj.del();
                           layer.close(index);
                         });
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
                  });
                }
              });
            }
          });
          $('.release-extend').on('click', function() {
            var index = layer.open({
              type: 1
              ,title: '发布我的组件'
              ,maxmin: true
              ,skin: 'layui-layer-release-extend'
              ,anim: 2
              ,area: ['80%', '80%']
              ,shadeClose: false
              ,content: '<div id="Index-extend-release-extend-View"></div>'
              ,success: function () {
                var $index_Template = $('#Index-extend-release-extend-Template').html();
                var $index_View = $('#Index-extend-release-extend-View'); //视图
                laytpl($index_Template).render($user, function(html) {
                  $index_View.html(html);
                });
                form.render();
                form.on('submit(submit)', function(data){
                  data.field.token = $user.token;
                  layer.load(2,{offset: 't'});
                  $.ajax({
                    url: $api + 'AddExtend.do'
                    ,type: 'post'
                    ,data: data.field
                    ,timeout: 10000
                    ,dataType: 'json'
                    ,success: function(data) {
                      layer.closeAll('loading');
                      if (data.code == 0 && data.msg == '20000' && data.call == 'success') {
                       layer.msg('添加成功', {
                         anim: 0
                         ,time: 1000
                         ,offset: 't'
                       }, function() {
                         table.reload('extend-list');
                         layer.close(index);
                       });
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
                  return false;
                });
              }
            });
          });
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
    $index_Template = $('#Index-extend-user-null-Template').html();
    laytpl($index_Template).render({}, function(html) {
      $index_View.html(html);
    });
    $('.qq-login').on('click', function() {
      var $rurl = Base64.encode($protocol + '//' + $host + $path);
      layer.open({
        type: 2
        ,title: 'QQ登录'
        ,maxmin: true
        ,skin: 'layui-layer-qq-login'
        ,anim: 2
        ,area: ['50%', '55%']
        ,shadeClose: true
        ,content: 'https://cloud.hcwl520.xin/open/qq_login/?rurl=' + $rurl + '&type=extend&token=' + (new Date()).getTime()
      });
    });
  }
  table.render({
    elem: '#extend-lists'
    ,method: 'post'
    ,url: window.$api + 'GetLayuiCdnExtends'
    ,title: '开放组件列表'
    ,parseData: function(res){
      return {
        code: res.code
        ,msg: res.call
        ,count: res.count
        ,data: res.data.data
      };
    }
    ,cols: [[
      {field: 'name', title: '组件名', minWidth: 200}
      ,{field: 'version', title: '组件版本', minWidth: 120}
      ,{field: 'addtime', title: '提交时间', width: 170, align: 'center'}
      ,{field: 'endtime', title: '更新时间', width: 170, align: 'center'}
      ,{field: 'url', title: '文件入口', width: 150, align: 'center', templet: function(d){
        var $down = '';
        if (d.file != null && d.file != '') {
          $down = '<a class="layui-btn layui-btn-xs btn-right" target="_self" href="' + $hosts + 'extend/' + d.name + '/' + d.version + '/' + d.file + '">下载</a>';
        }
        return '<div><a class="layui-btn layui-btn-xs btn-left chc-copy" data-clipboard-text="' + $hosts + 'extend/' + d.name + '/' + d.version + '/' + '">复制</a>' + $down + '</div>';
      }}
      ,{field: 'api', title: '文档地址', width: 150, align: 'center', templet: function(d){
        return '<div><a class="layui-btn layui-btn-xs btn-left chc-copy" data-clipboard-text="' + d.url + '">复制</a><a class="layui-btn layui-btn-xs btn-right" rel="nofollow" target="_blank" href="' + d.url + '">打开</a></div>';
      }}
    ]]
    ,page: true
    ,skin: 'nob'
    ,even: false
    ,size: 'sm'
  });
  form.render();
});
//*LAYUI END*//
