Game.registerMod("harder_core",{
    init:function(){
      Game.Notify("Unluckiest mod ever has loaded!", "why did i add the exclamation mark because this isnt an exciting mod :sob:", [16, 5]);
      let keepsakesA = Game.Reset.toString();
      let keepsakesB = keepsakesA.replace("if (Game.Has('Keepsakes') && Game.seasonDrops.indexOf(me.name)!=-1 && Math.random()<1/5){}", "if (Game.Has('Keepsakes') && Game.seasonDrops.indexOf(me.name)!=-1 && Math.random()<0){}").replace("else if (Game.HasAchiev('O Fortuna') && me.tier=='fortune' && Math.random()<0.4){}", "else if (Game.HasAchiev('O Fortuna') && me.tier=='fortune' && Math.random()<0){}");
      let sugarA = Game.HarvestLumps.toString();
      let sugarB = sugarA.replace('if (total>0) Game.Popup(\'<small>+\'+loc("%1 sugar lump",LBeautify(total))+\'</small>\',(rect.left+rect.right)/2,(rect.top+rect.bottom)/2-48);else Game.Popup(\'<small>\'+loc(\"Botched harvest!\")+\'</small>\',(rect.left+rect.right)/2,(rect.top+rect.bottom)/2-48);', 'Game.Popup(\'<small>\'+loc("Botched harvest!")+\'</small>\',(rect.left+rect.right)/2,(rect.top+rect.bottom)/2-48);');
      let popFuncA = Game.shimmerTypes.golden.popFunc.toString();
      let popFuncB = popFuncA.replace("var choice=choose(list)", "var choice='blab';");
      eval('Game.Reset=function(hard)' + keepsakesB);
      eval('Game.HarvestLumps=function(amount,silent)' + sugarB);
      eval('Game.shimmerTypes.golden.popFunc=' + popFuncB);
      
      Game.registerHook('logic', function() {
        if(Game.lumpCurrentType > 0){
          Game.lumpCurrentType = 0;
        }
      });
    },
    save:function(){
    },
    load:function(str){
    },
});

