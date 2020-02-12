//*初始化问题反馈*//
var $LayuiCdnLoginReceive = LayuiCdnLoginReceive();
layui.config({
  version: $update_Time
}),layui.use(['layer', 'form', 'laytpl', 'upload', 'table', 'layedit'], function() {
  var $ = layui.$
  ,layer = layui.layer
  ,form = layui.form
  ,laytpl = layui.laytpl
  ,table = layui.table
  ,layedit = layui.layedit;
  var $TableName = 'user';
  var $user = layui.data($TableName);
  var $index_Template = $('#Index-feedback-user-Template').html();
  var $index_View = $('#Index-feedback-user-View');
  /*输入问题回调*/
  /*var $desc_tips = 0;
  var x = 1000;
  desc_back = function(othis){
    var t = othis.val();
    var l = t.length;
    $('.desc_tips').text(l);
    if (l >= x) {
      $('.desc_tipsx').html('您已超限' + (l-x) + '字');
    } else {
      $('.desc_tipsx').empty();
    }
    if (l >= x && $desc_tips == 0) {
      $(othis).addClass('layui-disabled');
      $(othis).attr('disabled','disabled');
      layer.open({
        title: '超限提示'
        ,content: '您输入的内容已超出限制&nbsp;' + (l-x) + '&nbsp;个字,请修改!'
        ,btn: '我已知晓!'
        ,btnAlign: 'c'
        ,scrollbar: false
        ,shadeClose: false
        ,closeBtn: 0
        ,success: function (layero) {
          $desc_tips += 1;
          var $btn = layero.find('.layui-layer-btn0');
          var $content = layero.find('.layui-layer-content');
          $btn.css('background-color', '#0ABF5B');
          $btn.css('border-color', '#0ABF5B');
          $content.css('text-align', 'center');
          $content.css('border-bottom', '1px solid #e2e2e2');
          $(othis).removeClass('layui-disabled');
          $(othis).removeAttr('disabled','disabled');
        }
      });   
    }
  }*/
  /*编辑逐条数据*/
  var SetFeedbackData = function(d,callback){
    d.id = $('#Index-layer-feedback-View .feedbackId').val();
    d.token = $user.token;
    var msg = '更新';
    if (d.type == 'close') {
      msg = '结单';
    } else if (d.type == 'urge') {
      msg = '催单';
    }
    layer.load(2,{offset: 't'});
    $.ajax({
      url: $api + 'UpdateLayuiCdnFeedback'
      ,type: 'post'
      ,data: d
      ,timeout: 10000
      ,dataType: 'json'
      ,success: function(data) {
        layer.closeAll('loading');
        if (data.code == 0 && data.msg == '20000' && data.call == 'success') {
         layer.msg(msg + '成功', {
           anim: 0
           ,time: 1000
           ,offset: 't'
         }, function() {
           if(typeof callback == 'function') {
             callback();
           }
           table.reload('feedback-list');
           table.reload('feedback-lists');
           layer.closeAll();
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
        //layui.data($TableName, null);
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
  }
  /*查看渲染*/
  var SeeFeedbackLayer = function(d){
    var index = layer.open({
      type: 1
      ,title: '<i class="layui-icon layui-icon-home"></i>&nbsp;查看问题ID：' + d.id
      ,skin: 'layui-layer-see-feedback'
      ,anim: 2
      ,area: ['100%', '100%']
      ,move: false
      ,scrollbar: false
      ,shadeClose: false
      ,content: '<div id="Index-layer-Seefeedback-View"></div>'
      ,success: function () {
        var $index_Template = $('#Index-layer-Seefeedback-Template').html();
        var $index_View = $('#Index-layer-Seefeedback-View'); //视图
        var Desc_Index_edit,Descs_Index_edit;
        if (d.descs == '' || typeof d.descs == 'undefined' || typeof d.descs == 'object' || d.descs == null || d.descs == 'null') {
          d.descs = '暂无数据';
        }
        laytpl($index_Template).render(d, function(html) {
          $index_View.html(html);
          form.render();
          Desc_Index_edit = layedit.build('layer-desc',{
            height: 420
            ,hideTool: ['image']
          });
          Descs_Index_edit = layedit.build('layer-descs',{
            height: 455
            ,tool: []
          });
        });
      }
    });
  }
  /*编辑渲染*/
  var SetFeedbackLayer = function(d){
    var index = layer.open({
      type: 1
      ,title: '修改/查看我的问题'
      ,skin: 'layui-layer-set-feedback'
      ,anim: 2
      ,area: ['100%', '100%']
      ,move: false
      ,scrollbar: false
      ,shadeClose: false
      ,content: '<div id="Index-layer-feedback-View"></div>'
      ,end: function(){
        layer.closeAll('tips');
      }
      ,success: function () {
        var $index_Template = $('#Index-layer-feedback-Template').html();
        var $index_View = $('#Index-layer-feedback-View'); //视图
        var Desc_Index_edit,Descs_Index_edit;
        if (d.descs == '' || typeof d.descs == 'undefined' || typeof d.descs == 'object' || d.descs == null || d.descs == 'null') {
          d.descs = '暂无数据';
        }
        laytpl($index_Template).render(d, function(html) {
          $index_View.html(html);
          form.render();
          Desc_Index_edit = layedit.build('layer-desc',{
            height: 420
            ,hideTool: ['image']
          });
          Descs_Index_edit = layedit.build('layer-descs',{
            height: 455
            ,tool: []
          });
        });
        $('.close-feedback').on('click', function() {
          layer.confirm('结束反馈后（代表：问题已解决！）, 后续将无法继续进行本问题反馈！', {
            icon: 0
            ,title:'结单提示'
            }, function(index){
            var $close = 'close';
            var $data = {'type': $close,[$close]: $close};
            SetFeedbackData($data);
          });
        });
        $('.urge-feedback').on('click', function() {
          var $urge = 'urge';
          var $data = {'type': $urge,[$urge]: $urge};
          SetFeedbackData($data);
        });
        var $open = d.open;
        form.on('switch(LayerSwitchOpen)', function(data){
          if (data.elem.checked == true) {
            $open = 0;
            layer.closeAll('tips');
            layer.tips('展示给所有LayuiCdn用户',data.othis,{tips:[1,'#000'],time:5000});
          } else {
            $open = 1;
            layer.closeAll('tips');
            layer.tips('仅自己可见',data.othis,{tips:[1,'#000'],time:5000});
          }
          var $data = {'type': 'open','open': $open};
          SetFeedbackData($data);
        });
        form.on('submit(set-submit)', function(data){
          var $desc = layedit.getContent(Desc_Index_edit);
          var $desct = layedit.getText(Desc_Index_edit);
          var $desctl = $desct.length;
          if($desctl <= 5 ){
            layer.msg('请正确输入问题!', {
              anim: 6
              ,time: 2000
              ,offset: 't'
            });
            return false;
          }
          var $data = {'type': 'desc','desc': $desc};
          SetFeedbackData($data);
          return false;
        });
      }
    });
  }
  /*登录后渲染*/
  var ReleaseFeedback = function(){
    table.render({
      elem: '#feedback-list'
      ,method: 'post'
      ,url: window.$api + 'GetLayuiCdnUserFeedback'
      ,where: {
        token: $user.token
      }
      ,title: '自有问题列表'
      ,parseData: function(res){
        return {
          code: res.code
          ,msg: res.call
          ,count: res.count
          ,data: res.data.data
        };
      }
      ,cols: [[
        {field: 'id', title: '问题ID-点击复制', width: 120, templet: function(d){
          return '<div><span class="cursor-pointer chc-copy" data-clipboard-text="' + '问题ID:' + d.id + '">' + d.id + '</span></div>';
        }}
        ,{field: 'desc', title: '问题内容-点击编辑', minWidth: 120, event: 'SetDesc', style: 'cursor: pointer;'}
        ,{field: 'descs', title: '处理方法-点击查看', minWidth: 120, event: 'SeeDescs', style: 'cursor: pointer;'}
        ,{field: 'addtime', title: '提交时间', width: 170, align: 'center'}
        ,{field: 'endtime', title: '更新时间', width: 170, align: 'center'}
        ,{field: 'state', fixed: 'right', title: '问题状态', width: 150, align: 'center', templet: function(d){
          var $state,$class;
          if (d.state == 0) {
            $state = '已解决';
            $class = 'ys-green';
          }
          if (d.state == 1) {
            $state = '已分派工程师';
            $class = 'ys-blue';
          }
          if (d.state == 2) {
            $state = '工程师处理中';
            $class = 'ys-orange';
          }
          if (d.state == 3) {
            $state = '已催促工程师';
            $class = 'ys-red';
          }
          if (d.state == 4) {
            $state = '等待用户补充';
            $class = 'ys-gray2';
          }
          return '<div><span class="' + $class + '">' + $state + '</span></div>';
        }}
        ,{field: 'type', fixed: 'right', title: '问题类型', width: 100, templet: function(d){
          var $type,$class;
          if (d.type == 1) {
            $type = '请求错误';
            $class = 'layui-bg-red';
          }
          if (d.type == 2) {
            $type = '运行错误';
            $class = 'layui-bg-orange';
          }
          if (d.type == 3) {
            $type = '其他问题';
            $class = 'layui-bg-black';
          }
          return '<div><span class="layui-btn layui-btn-xs ' + $class + '">' + $type + '</span></div>';
        }}
      ]]
      ,page: true
      ,skin: 'nob'
      ,even: false
      ,size: 'sm'
    });
    table.on('tool(feedback-list)', function(obj){
      var data = obj.data;
      if(obj.event === 'SeeDescs'){
        obj.event = 'SetDesc';
      }
      if(obj.event === 'SetDesc'){
        SetFeedbackLayer(data);
      }
    });
    $('.release-feedback').on('click', function() {
      var index = layer.open({
        type: 1
        //,title: '提交我的问题&nbsp;<span class="desc_text">已输入<span class="desc_tips">0</span>个字，最多可输入1000个字!<span class="desc_tipsx"></span></span>'
        ,title: '提交我的问题'
        ,maxmin: true
        ,skin: 'layui-layer-release-feedback'
        ,anim: 2
        ,area: ['80%', '80%']
        ,scrollbar: false
        ,shadeClose: false
        ,content: '<div id="Index-release-feedback-View"></div>'
        ,end: function(){
          layer.closeAll('tips');
        }
        ,success: function () {
          var $index_Template = $('#Index-release-feedback-Template').html();
          var $index_View = $('#Index-release-feedback-View'); //视图
          var Desc_Index_edit;
          laytpl($index_Template).render($user, function(html) {
            $index_View.html(html);
            form.render();
            Desc_Index_edit = layedit.build('desc',{
              height: 420
              ,hideTool: ['image']
            });
            layer.tips('展示给所有LayuiCdn用户','.layui-form-onswitch',{tips:[1,'#000'],time:5000});
          });
          var $open = 0;
          form.on('switch(SwitchOpen)', function(data){
            if (data.elem.checked == true) {
              $open = 0;
              layer.closeAll('tips');
              layer.tips('展示给所有LayuiCdn用户',data.othis,{tips:[1,'#000'],time:5000});
            } else {
              $open = 1;
              layer.closeAll('tips');
              layer.tips('仅自己可见',data.othis,{tips:[1,'#000'],time:5000});
            }   
          });
          /*form.verify({
            desc: function(value, item){
              var l = value.length;
              if(l <= 5 ){
                return '请正确输入问题!';
              }
              if(l >= x ){
                return '字符超限!';
              }
            }
          });*/
          form.on('submit(submit)', function(data){
            var $desc = layedit.getContent(Desc_Index_edit);
            var $desct = layedit.getText(Desc_Index_edit);
            var $desctl = $desct.length;
            if($desctl <= 5 ){
              layer.msg('请正确输入问题!', {
                anim: 6
                ,time: 2000
                ,offset: 't'
              });
              return false;
            }
            data.field.token = $user.token;
            data.field.open = $open;
            data.field.desc = $desc;
            layer.load(2,{offset: 't'});
            $.ajax({
              url: $api + 'AddLayuiCdnFeedback'
              ,type: 'post'
              ,data: data.field
              ,timeout: 10000
              ,dataType: 'json'
              ,success: function(data) {
                layer.closeAll('loading');
                if (data.code == 0 && data.msg == '20000' && data.call == 'success') {
                 layer.msg('反馈成功', {
                   anim: 0
                   ,time: 1000
                   ,offset: 't'
                 }, function() {
                   table.reload('feedback-list');
                   if ($open == 0) {
                     table.reload('feedback-lists');
                   }
                   layer.closeAll();
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
  }
  if (!$.isEmptyObject($user)) {
    var $LayuiCdnLogin = LayuiCdnLogin(function($data){ //静默验证
      $user = $data;
      laytpl($index_Template).render($data, function(html) {
        $index_View.html(html);
        var $ReleaseFeedback = ReleaseFeedback();
      });
    });
  } else {
    $index_Template = $('#Index-feedback-user-null-Template').html();
    laytpl($index_Template).render({}, function(html) {
      $index_View.html(html);
      $('.qq-login').on('click', function() {
        var $LayuiCdnLogin = LayuiCdnLogin();
      });
    });
  }
  /*获取问题列表-全部-公开*/
  var GetLayuiCdnFeedback = function() {
    table.render({
      elem: '#feedback-lists'
      ,method: 'post'
      ,url: window.$api + 'GetLayuiCdnFeedback'
      ,title: '公开问题列表'
      ,parseData: function(res){
        return {
          code: res.code
          ,msg: res.call
          ,count: res.count
          ,data: res.data.data
        };
      }
      ,cols: [[
        {field: 'id', title: '问题ID-点击复制', width: 120, templet: function(d){
          return '<div><span class="cursor-pointer chc-copy" data-clipboard-text="' + '问题ID:' + d.id + '">' + d.id + '</span></div>';
        }}
        ,{field: 'desc', title: '问题内容-点击查看', minWidth: 120, event: 'SeeDesc', style: 'cursor: pointer;'}
        ,{field: 'descs', title: '处理方法-点击查看', minWidth: 120, event: 'SeeDescs', style: 'cursor: pointer;'}
        ,{field: 'addtime', title: '提交时间', width: 170, align: 'center'}
        ,{field: 'endtime', title: '更新时间', width: 170, align: 'center'}
        ,{field: 'state', fixed: 'right', title: '问题状态', width: 150, align: 'center', templet: function(d){
          var $state,$class;
          if (d.state == 0) {
            $state = '已解决';
            $class = 'ys-green';
          }
          if (d.state == 1) {
            $state = '已分派工程师';
            $class = 'ys-blue';
          }
          if (d.state == 2) {
            $state = '工程师处理中';
            $class = 'ys-orange';
          }
          if (d.state == 3) {
            $state = '已催促工程师';
            $class = 'ys-red';
          }
          if (d.state == 4) {
            $state = '等待用户补充';
            $class = 'ys-gray2';
          }
          return '<div><span class="' + $class + '">' + $state + '</span></div>';
        }}
        ,{field: 'type', fixed: 'right', title: '问题类型', width: 100, templet: function(d){
          var $type,$class;
          if (d.type == 1) {
            $type = '请求错误';
            $class = 'layui-bg-red';
          }
          if (d.type == 2) {
            $type = '运行错误';
            $class = 'layui-bg-orange';
          }
          if (d.type == 3) {
            $type = '其他问题';
            $class = 'layui-bg-black';
          }
          return '<div><span class="layui-btn layui-btn-xs ' + $class + '">' + $type + '</span></div>';
        }}
      ]]
      ,page: true
      ,skin: 'nob'
      ,even: false
      ,size: 'sm'
    });
    table.on('tool(feedback-lists)', function(obj){
      var data = obj.data;
      if(obj.event === 'SeeDescs'){
        obj.event = 'SeeDesc';
      }
      if(obj.event === 'SeeDesc'){
        SeeFeedbackLayer(data);
      }
    });
    form.render();
  }
  GetLayuiCdnFeedback();
});
//*LAYUI END*//
