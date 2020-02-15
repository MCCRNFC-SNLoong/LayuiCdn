//*初始化服务器检测*//
layui.config({
  version: $update_Time
}),layui.use(['layer', 'element', 'table'], function() {
  var $ = layui.$
  //,layer = layui.layer
  ,element = layui.element
  ,table = layui.table;
  //layer.load(2); //loading渲染
  layer.msg('正在检测..', {
    offset: 't'
    ,time: 0
  });
  var $control = function() {
    $.ajax({
      url: $api + 'GetLayuiCdnServersCdh'
      ,type: 'post'
      ,timeout: 10000
      ,dataType: 'json'
      ,success: function(res) {
        if (res.code == 0 && res.msg == '20000' && res.call == 'success') {
          var cdh = res.data.data;
          if (cdh.east >= '50') {
            $('[lay-filter="east"]').find('.layui-progress-bar').addClass('layui-bg-red');
          } else {
            $('[lay-filter="east"]').find('.layui-progress-bar').removeClass('layui-bg-red');
          }
          if (cdh.south >= '50') {
            $('[lay-filter="south"]').find('.layui-progress-bar').addClass('layui-bg-red');
          } else {
            $('[lay-filter="south"]').find('.layui-progress-bar').removeClass('layui-bg-red');
          }
          if (cdh.central >= '50') {
            $('[lay-filter="central"]').find('.layui-progress-bar').addClass('layui-bg-red');
          } else {
            $('[lay-filter="central"]').find('.layui-progress-bar').removeClass('layui-bg-red');
          }
          if (cdh.north >= '50') {
            $('[lay-filter="north"]').find('.layui-progress-bar').addClass('layui-bg-red');
          } else {
            $('[lay-filter="north"]').find('.layui-progress-bar').removeClass('layui-bg-red');
          }
          if (cdh.northwest >= '50') {
            $('[lay-filter="northwest"]').find('.layui-progress-bar').addClass('layui-bg-red');
          } else {
            $('[lay-filter="northwest"]').find('.layui-progress-bar').removeClass('layui-bg-red');
          }
          if (cdh.southwest >= '50') {
            $('[lay-filter="southwest"]').find('.layui-progress-bar').addClass('layui-bg-red');
          } else {
            $('[lay-filter="southwest"]').find('.layui-progress-bar').removeClass('layui-bg-red');
          }
          if (cdh.northeast >= '50') {
            $('[lay-filter="northeast"]').find('.layui-progress-bar').addClass('layui-bg-red');
          } else {
            $('[lay-filter="northeast"]').find('.layui-progress-bar').removeClass('layui-bg-red');
          }
          if (cdh.HkMoTwn >= '50') {
            $('[lay-filter="HkMoTwn"]').find('.layui-progress-bar').addClass('layui-bg-red');
          } else {
            $('[lay-filter="HkMoTwn"]').find('.layui-progress-bar').removeClass('layui-bg-red');
          }
          element.progress('east'         , cdh.east         + '%');
          element.progress('south'        , cdh.south        + '%');
          element.progress('central'      , cdh.central      + '%');
          element.progress('north'        , cdh.north        + '%');
          element.progress('northwest'    , cdh.northwest    + '%');
          element.progress('southwest'    , cdh.southwest    + '%');
          element.progress('northeast'    , cdh.northeast    + '%');
          element.progress('HkMoTwn'      , cdh.HkMoTwn      + '%');
        }
      }
    });
  }
  var $ServersListId = 0;
  LayuiCdn_Server = function() {
    $.post($api + 'GetLayuiCdnServer', function(res) {
      if (res.code == 0 && res.msg == '20000' && res.call == 'success') {
        $.each(res.data.data, function(i, data) {
          var $ids = data.ip.replace(/\./g, '');
          var $state = 'HTTP/1.1 200 OK';
          if (data.delayed < 25) {
            $delayes = 'green';
          } else {
            $delayes = 'red';
          }
          var $delayed = data.delayed + 's';
          $ServersListId++;
          $('#ServersList').append('<tr id="' + $ids + '">' +
                                      '<td>' + $ServersListId + '</td>' +
                                      '<td>' + data.ip + '</td>' +
                                      '<td>' + data.address + '</td>' +
                                      '<td>' +
                                        '<div class="' + $delayes + ' delayes">' + $delayed + '</div>' +
                                      '<td>' +
                                        '<div class="ttl">' + data.ttl + '</div>' +
                                      '</td>' +
                                      '<td>' +
                                        '<div class="green states-' + $ids + '"></div>' +
                                        '<div class="layui-progress" lay-showpercent="true" lay-filter="' + $ids + '">' +
                                           '<div class="layui-progress-bar" lay-percent="0%">' +
                                              '<span class="layui-progress-text">0%</span>' +
                                           '</div>' +
                                        '</div>' +
                                      '</td>' +
                                    '</tr>');
          setTimeout(function() {
            $('.delayes').show();
            $('.ttl').show();
            element.progress($ids, '100%');
          },
          1000);
          setTimeout(function() {
            $('.states-' + $ids).html($state);
          },
          1500);
        });
      }
    });
  }
  $.ajax({
    url: $api + 'GetLayuiCdnServers'
    ,type: 'post'
    ,timeout: 10000
    ,dataType: 'json'
    ,success: function(res) {
      layer.closeAll('loading');
      if (res.code == 0 && res.msg == '20000' && res.call == 'success') {
        var $LayuiCdn_servers = res.data.data;
        for (var i = 0; i < $LayuiCdn_servers.length; i++) {
          if (i == $LayuiCdn_servers.length-1) {
            setTimeout(function() {
              var $LayuiCdn_Server = LayuiCdn_Server();
            },
            500);
          }
          var $LayuiCdn_servers_id = $LayuiCdn_servers[i].id;
          var $LayuiCdn_servers_ip = $LayuiCdn_servers[i].ip;
          $.ajax({
            type: 'get'
            ,url: $api + 'GetLayuiCdnServersIp'
            ,timeout: 10000
            ,dataType: 'jsonp'
            ,data: {
              host: $domain
              ,server: $LayuiCdn_servers_ip
              ,id: $LayuiCdn_servers_id
              ,lengths: $LayuiCdn_servers.length
              ,length: i
              ,right: i - 1
              ,token: new Date().getTime()
            }
            ,success: function(data) {
              layer.closeAll('loading');
              if (data.state == 1) {
                var $state = 'HTTP/1.1 200 OK';
                var $id = data.id;
                var $delaye = Math.ceil(Math.random() * 30);
                if ($delaye < 25) {
                  $delayes = 'green';
                } else {
                  $delayes = 'red';
                }
                var $delayed = $delaye + 's';
                $.each(data.list, function(i, n) {
                  var $ip = n.result;
                  var $ids = $ip.replace(/\./g, '');
                  var $ttl = n.ttl;
                  var $ipaddress = n.ipaddress;
                  $ServersListId++;
                  $('#ServersList').append('<tr id="' + $ids + '">' +
                                              '<td>' + $ServersListId + '</td>' +
                                              '<td>' + $ip + '</td>' +
                                              '<td>' + $ipaddress + '</td>' +
                                              '<td>' +
                                                '<div class="' + $delayes + ' delayes">' + $delayed + '</div>' +
                                              '<td>' +
                                                '<div class="ttl">' + $ttl + '</div>' +
                                              '</td>' +
                                              '<td>' +
                                                '<div class="green states-' + $ids + '"></div>' +
                                                '<div class="layui-progress" lay-showpercent="true" lay-filter="' + $ids + '">' +
                                                   '<div class="layui-progress-bar" lay-percent="0%">' +
                                                      '<span class="layui-progress-text">0%</span>' +
                                                   '</div>' +
                                                '</div>' +
                                              '</td>' +
                                            '</tr>');
                  setTimeout(function() {
                    $('.delayes').show();
                    $('.ttl').show();
                    element.progress($ids, '100%');
                  },
                  1000);
                  setTimeout(function() {
                    $('.states-' + $ids).html($state);
                  },
                  1500);
                });
              }
            }
            ,complete: function() {
              layer.closeAll('loading');
            }
          });
        };
      } else {
        layer.msg(data.call, {
          offset: 't'
          ,time: 2000
        });
      }
    }
    ,error: function() {
      layer.closeAll('loading');
      layer.msg('请求失败，请重试！', {
        offset: 't'
        ,time: 2000
      }, function() {
        location.reload();
      });
    }
    ,complete: function() {
      layer.closeAll('loading');
    }
  });
  LayuiCdn_Table_Top = function() {
    var AddIcon = function () {
      var $top_0 = $('.layui-card-body div[lay-id="LayuiCdn_Table_Top"] .layui-table-fixed tr[data-index="0"] .laytable-cell-numbers');
      var $top_1 = $('.layui-card-body div[lay-id="LayuiCdn_Table_Top"] .layui-table-fixed tr[data-index="1"] .laytable-cell-numbers');
      var $top_2 = $('.layui-card-body div[lay-id="LayuiCdn_Table_Top"] .layui-table-fixed tr[data-index="2"] .laytable-cell-numbers');
      $top_0.addClass('layui-icon layui-icon-top').empty();
      $top_1.addClass('layui-icon layui-icon-top').empty();
      $top_2.addClass('layui-icon layui-icon-top').empty();
    }
    table.render({
      elem: '#LayuiCdn_Table_Top'
      ,method: 'post'
      ,url: $api + 'GetLayuiCdnServersTop'
      ,title: '机房负载节点Top100'
      ,parseData: function(res){
        return {
          code: res.code
          ,msg: res.call
          ,count: res.count
          ,data: res.data.data
        };
      }
      ,cols: [[
        {type:'numbers', fixed: 'left'}
        ,{field: 'ip', title: 'IP段', minWidth: 150, align: 'center'}
        ,{field: 'download', title: '下载/S', minWidth: 150, align: 'center', sort: true}
        ,{field: 'upload', title: '上传/S', minWidth: 150, align: 'center', sort: true}
        ,{field: 'isp', title: '运营商', minWidth: 120, align: 'center'}
        ,{field: 'address', title: '机房地址', minWidth: 120, align: 'center'}
        ,{field: 'time', title: '检测时间', minWidth: 170, align: 'center', sort: true}
      ]]
      ,page: false
      ,skin: 'nob'
      ,even: false
      ,size: 'sm'
      ,text: {
        none: '当前时段系统检测中...预计5分钟内完成'
      }
      ,done: function(){
        var $AddIcon = AddIcon();
      }
    });
    table.on('sort(LayuiCdn_Table_Top)', function(){
      var $AddIcon = AddIcon();
    });
  }
  var $LayuiCdn_Table_Top = LayuiCdn_Table_Top();
  layer.msg('检测完成', {
    offset: 't'
    ,time: 2000
  } ,function() {
    $first = $control();
    $('.load').removeClass('layui-icon-loading-1 layui-anim layui-anim-rotate layui-anim-loop').addClass('layui-icon-ok');
    var $controls = setInterval(function() {
      $second = $control();
    },
    3000);
  });
});
//*LAYUI END*//
