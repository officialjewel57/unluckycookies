function inRect(x,y,rect)
{
  //find out if the point x,y is in the rotated rectangle rect{w,h,r,o} (width,height,rotation in radians,y-origin) (needs to be normalized)
  //I found this somewhere online I guess
  var dx = x+Math.sin(-rect.r)*(-(rect.h/2-rect.o)),dy=y+Math.cos(-rect.r)*(-(rect.h/2-rect.o));
  var h1 = Math.sqrt(dx*dx + dy*dy);
  var currA = Math.atan2(dy,dx);
  var newA = currA - rect.r;
  var x2 = Math.cos(newA) * h1;
  var y2 = Math.sin(newA) * h1;
  if (x2 > -0.5 * rect.w && x2 < 0.5 * rect.w && y2 > -0.5 * rect.h && y2 < 0.5 * rect.h) return true;
  return false;
}

Game.registerMod("harder_core",{
    init:function(){
      Game.Notify("Unluckiest mod ever has loaded!", "why did i add the exclamation mark because this isnt an exciting mod :sob:", [16, 5]);
      let keepsakesA = Game.Reset.toString();
      let keepsakesB = keepsakesA.replace("if (Game.Has('Keepsakes') && Game.seasonDrops.indexOf(me.name)!=-1 && Math.random()<1/5){}", "if (Game.Has('Keepsakes') && Game.seasonDrops.indexOf(me.name)!=-1 && Math.random()<0){}").replace("else if (Game.HasAchiev('O Fortuna') && me.tier=='fortune' && Math.random()<0.4){}", "else if (Game.HasAchiev('O Fortuna') && me.tier=='fortune' && Math.random()<0){}");
      let sugarA = Game.clickLump.toString();
      let sugarB = sugarA.replace('var amount=choose([0,1]);', 'var amount=0;');
      let popFuncA = Game.shimmerTypes.golden.popFunc.toString();
      let popFuncB = popFuncA.replace("var choice=choose(list)", "var choice='blab';").replace("if (Math.random()>failRate)", "if (Math.random()>2147483647)");
      let updateShimmersA = Game.updateShimmers.toString();
      let updateShimmersB = updateShimmersA.replace("if (Game.hasBuff('Cookie storm') && Math.random()<0.5)", "if (Game.hasBuff('Cookie storm') && Math.random()<0)").replace("if (Math.random()<Math.pow(Math.max(0,(me.time-me.minTime)/(me.maxTime-me.minTime)),5))", "if (0.9999999999999999<Math.pow(Math.max(0,(me.time-me.minTime)/(me.maxTime-me.minTime)),5))").replace("if (Game.Has('Distilled essence of redoubled luck') && Math.random()<0.01) var newShimmer=new Game.shimmer(i);", "if (Game.Has('Distilled essence of redoubled luck') && Math.random()<0) var newShimmer=new Game.shimmer(i);");
      let shimmerTypesA = Game.shimmerTypes.golden.initFunc.toString();
      let shimmerTypesB = shimmerTypesA.replace("if ((!me.forceObj || !me.forceObj.noWrath) && ((me.forceObj && me.forceObj.wrath) || (Game.elderWrath==1 && Math.random()<1/3) || (Game.elderWrath==2 && Math.random()<2/3) || (Game.elderWrath==3) || (Game.hasGod && Game.hasGod('scorn'))))", "if ((!me.forceObj || !me.forceObj.noWrath) && ((me.forceObj && me.forceObj.wrath) || Game.elderWrath >= 1 || (Game.hasGod && Game.hasGod('scorn'))))");
      let eggsA = Game.DropEgg.toString();
      let eggsB = eggsA.replace('if (Math.random()>=failRate)', 'if (Math.random()>=2147483647)');
      let halloweenA = Game.UpdateWrinklers.toString();
      let halloweenB = halloweenA.replace("if (Math.random()>failRate)", "if (Math.random()>2147483647)");
      let fortuneA = Game.getNewTicker.toString();
      let fortuneB = fortuneA.replace("if (!manual && Game.T>Game.fps*10 && Game.Has('Fortune cookies') && Math.random()<(Game.HasAchiev('O Fortuna')?0.04:0.02))", "if (!manual && Game.T>Game.fps*10 && Game.Has('Fortune cookies') && Math.random()<(Game.HasAchiev('O Fortuna')?0.00:0.00))");
      let veilA = Game.loseShimmeringVeil.toString();
      let veilB = veilA.replace("if (Math.random()<Game.getVeilDefense())", "if (Math.random()<0)");
      let wrinklerA = Game.SpawnWrinkler.toString();
      let wrinklerB = wrinklerA.replace("if (Math.random()<0.0001) me.type=1;", "if (Math.random()<0) me.type=1;");
      let dragonPetA = Game.ClickSpecialPic.toString();
      let dragonPetB = dragonPetA.replace("if (Game.dragonLevel>=8 && Math.random()<1/20)", "if (Game.dragonLevel>=8 && Math.random()<0)");
      let jplA = Game.Logic.toString();
      let jplB = jplA.replace("if (Game.T%(Game.fps)==0 && Math.random()<1/1000000) Game.Win('Just plain lucky');", "if (Game.T%(Game.fps)==0 && Math.random()<0) Game.Win('Just plain lucky');");
      
      eval('Game.Reset=' + keepsakesB);
      eval('Game.clickLump=' + sugarB);
      eval('Game.shimmerTypes.golden.popFunc=' + popFuncB);
      eval('Game.updateShimmers=' + updateShimmersB);
      eval('Game.DropEgg=' + eggsB);
      eval('Game.UpdateWrinklers=' + halloweenB);
      eval('Game.shimmerTypes.golden.initFunc=' + shimmerTypesB);
      eval('Game.getNewTicker=' + fortuneB);
      eval('Game.loseShimmeringVeil=' + veilB);
      eval('Game.SpawnWrinkler=' + wrinklerB);
      eval('Game.ClickSpecialPic=' + dragonPetB);
      eval('Game.Logic=' + jplB);
      
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

