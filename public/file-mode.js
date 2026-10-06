'use strict';
/* Local viewing remains colored; only online accounts require the server. */
if(location.protocol==='file:'){document.documentElement.dataset.offline='true';window.ARENA_OFFLINE=true;}

document.documentElement.dataset.device=matchMedia('(pointer:coarse)').matches||/Android|iPhone|iPad/i.test(navigator.userAgent)?'mobile':'pc';document.documentElement.dataset.ready='no';
