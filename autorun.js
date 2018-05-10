$("<link>").attr({ href: "https://raw.githack.com/ArisAgeha/live2d/master/waifu.css", rel: "stylesheet", type: "text/css" }).appendTo('head');
$('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" width="280" height="250" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
$('body').append($('<script src="https://raw.githack.com/ArisAgeha/live2d/master/live2d.js"></script>'));
$('body').append($('<script src="https://raw.githack.com/ArisAgeha/live2d/master/waifu-tips.js"></script>'));

clock()

function clock() {
  try{
    
    initModel('https://raw.githack.com/ArisAgeha/live2d/master/');
    console.log('success');
    return;
    
  } catch(e) {
    
    consol.log(e);
    console.log('init fail!!!');
    setTimeout(function(){
        clock();
    }, 1000);
    
  }
}
