(function() {
  /*百度推送*/
  var bp = document.createElement('script');
  var s = document.getElementsByTagName("script")[0];
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  } else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  s.parentNode.insertBefore(bp, s);
  /*360推送*/
  var sozz_src = 'https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba';
  document.write('<script src="' + sozz_src + '" id="sozz"><\/script>'); 
})();