function getUuid(){
  var len=32;//32长度
  var radix=16;//16进制
  var chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');var uuid=[],i;radix=radix||chars.length;if(len){for(i=0;i<len;i++)uuid[i]=chars[0|Math.random()*radix];}else{var r;uuid[8]=uuid[13]=uuid[18]=uuid[23]='-';uuid[14]='4';for(i=0;i<36;i++){if(!uuid[i]){r=0|Math.random()*16;uuid[i]=chars[(i==19)?(r&0x3)|0x8:r];}}}
  return uuid.join('');
}  

html2canvas($("body"), {
         onrendered: function (canvas) {
             var url = canvas.toDataURL();
              //以下代码为下载此图片功能
             var triggerDownload = $("<a>").attr("href", url).attr("download", "mario_screenshot_"+getUuid()+".png").appendTo("body");
               triggerDownload[0].click();
               triggerDownload.remove();
           },
	background:"#fff"
   });
