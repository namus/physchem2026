/* FPC 2026 photo gallery: lightweight lightbox with keyboard, swipe and shareable #photo-NNN links. */
(function(){'use strict';
document.addEventListener('DOMContentLoaded',function(){
  var items=[].slice.call(document.querySelectorAll('.gal-item'));
  if(!items.length) return;
  var lb=document.createElement('div'); lb.className='lb'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true'); lb.setAttribute('aria-label','Photo viewer');
  lb.innerHTML='<div class="lb-stage"><img alt=""></div>'+
    '<div class="lb-bar"><div class="lb-cap"></div><div class="lb-count"></div><div class="lb-links"><a class="lb-dl" download>Download</a></div></div>'+
    '<button class="lb-btn lb-close" type="button" aria-label="Close">&times;</button>'+
    '<button class="lb-btn lb-prev" type="button" aria-label="Previous photo">&#8249;</button>'+
    '<button class="lb-btn lb-next" type="button" aria-label="Next photo">&#8250;</button>';
  document.body.appendChild(lb);
  var img=lb.querySelector('img'),cap=lb.querySelector('.lb-cap'),cnt=lb.querySelector('.lb-count'),dl=lb.querySelector('.lb-dl');
  var cur=-1,lastFocus=null;
  function show(i){
    cur=(i+items.length)%items.length; var a=items[cur];
    img.src=a.getAttribute('href'); img.alt=a.querySelector('img').alt;
    cap.textContent=a.getAttribute('data-caption'); cnt.textContent=(cur+1)+' / '+items.length;
    dl.href=a.getAttribute('href');
    if(history.replaceState) history.replaceState(null,'','#'+a.id);
    [cur+1,cur-1].forEach(function(j){var b=items[(j+items.length)%items.length]; var p=new Image(); p.src=b.getAttribute('href');});
  }
  function open(i){lastFocus=document.activeElement; lb.classList.add('open'); document.body.style.overflow='hidden'; show(i); lb.querySelector('.lb-close').focus();}
  function close(){lb.classList.remove('open'); document.body.style.overflow=''; img.src='';
    if(history.replaceState) history.replaceState(null,'',location.pathname+location.search);
    if(lastFocus) lastFocus.focus();}
  items.forEach(function(a,i){a.addEventListener('click',function(e){e.preventDefault(); open(i);});});
  lb.querySelector('.lb-close').addEventListener('click',close);
  lb.querySelector('.lb-prev').addEventListener('click',function(){show(cur-1);});
  lb.querySelector('.lb-next').addEventListener('click',function(){show(cur+1);});
  lb.addEventListener('click',function(e){if(e.target===lb||e.target.classList.contains('lb-stage')) close();});
  document.addEventListener('keydown',function(e){ if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') close(); else if(e.key==='ArrowRight') show(cur+1); else if(e.key==='ArrowLeft') show(cur-1);});
  var x0=null; var st=lb.querySelector('.lb-stage');
  st.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
  st.addEventListener('touchend',function(e){ if(x0===null) return; var dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>45) show(cur+(dx<0?1:-1)); x0=null;});
  var m=location.hash.match(/^#photo-(\d{3})$/);
  if(m){ var k=items.findIndex(function(a){return a.id==='photo-'+m[1];}); if(k>=0) open(k); }
});
})();
