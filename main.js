Game.registerMod("harder_core",{
    init:function(){
      Game.Notify("Unluckiest mod ever has loaded!", "why did i add the exclamation mark because this isnt an exciting mod :sob:", [16, 5]);
      Game.registerHook('logic', function() {
        Game.lumpCurrentType = 0;
        Math.random = () => 0.9999999999999999;
        let a = Game.shimmerTypes.golden.popFunc.toString();
        let b = a.replace("var choice=choose(list)", "var choice='blab';");
        eval('Game.shimmerTypes.golden.popFunc=' + b);
      });
    },
    save:function(){
    },
    load:function(str){
    },
});

