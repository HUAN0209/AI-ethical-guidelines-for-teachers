function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6aJLJqDB0xM":
        Script1();
        break;
      case "68CXIbu6kad":
        Script2();
        break;
      case "6dTVVt4PKjv":
        Script3();
        break;
      case "6ez81TX8F2Y":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6gDLVNJPn56');
const duration = 2500;
const easing = 'ease-out';
const id = '6Z7eSNPcHwM';
const delay = 3458;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6RaaoZcPYgg');
const duration = 2500;
const easing = 'ease-out';
const id = '5x1JfEdiZJc';
const delay = 30021;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5j98K0uXXi9');
const duration = 1250;
const easing = 'ease-out';
const id = '6pIedkrBP4l';
const delay = 3896;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6QsNCBfoSA8');
const duration = 1250;
const easing = 'ease-out';
const id = '5ckZaTDkzuv';
const delay = 31000;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
