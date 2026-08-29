(function(){
  function initProgressAndToc(){
    var ring=document.querySelector('.ring-fill');
    var pct=document.querySelector('.ring-pct');
    var R=17,C=2*Math.PI*R;
    if(ring){ring.style.strokeDasharray=C;}
    var links=Array.prototype.slice.call(document.querySelectorAll('.toc-list a'));
    var targets=links.map(function(a){return document.getElementById(a.getAttribute('href').slice(1));});
    function onScroll(){
      var doc=document.documentElement;
      var scrolled=doc.scrollTop||document.body.scrollTop;
      var height=(doc.scrollHeight-doc.clientHeight)||1;
      var p=Math.min(1,Math.max(0,scrolled/height));
      if(ring){ring.style.strokeDashoffset=C*(1-p);}
      if(pct){pct.textContent=Math.round(p*100)+'%';}
      var active=0;
      for(var i=0;i<targets.length;i++){
        if(targets[i]&&targets[i].getBoundingClientRect().top-140<=0){active=i;}
      }
      links.forEach(function(a,i){a.classList.toggle('active',i===active);});
    }
    document.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  }
  function initCopyButtons(){
    document.querySelectorAll('.code-copy').forEach(function(btn){
      btn.addEventListener('click',function(){
        var code=btn.closest('.code-block').querySelector('code').textContent;
        navigator.clipboard&&navigator.clipboard.writeText(code);
        var old=btn.textContent;btn.textContent='Copied';
        setTimeout(function(){btn.textContent=old;},1400);
      });
    });
  }
  document.addEventListener('DOMContentLoaded',function(){initProgressAndToc();initCopyButtons();});
})();
