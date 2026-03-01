Game.registerMod("harder_core",{
    init:function(){
      Game.Notify("Unluckiest mod ever has loaded!", "why did i add the exclamation mark because this isnt an exciting mod :sob:", [16, 5]);
      Game.registerHook('logic', function() {
        Game.lumpCurrentType = 0;
        for(let i = 0; i < 12; i++){
          var me = Game.wrinklers[i];
          me.type = 0;
          me.suck = 1;
        }
          if(Game.elderWrath = 0){
            Game.shimmerTypes['golden'].time = 0;
            if (Game.shimmers.length === 0) {
              if(Game.Has('Serendipity')){
                if(Game.T % 6750 === 0 && Game.T != 0){
                  var newShimmer = new Game.shimmer("golden");
                  newShimmer.force = 'blab';
                  newShimmer.spawnLead = 1;
                }
              } else if(Game.Has('Lucky day')){
                if(Game.T % 13500 === 0 && Game.T != 0){
                  var newShimmer = new Game.shimmer("golden");
                  newShimmer.force = 'blab';
                  newShimmer.spawnLead = 1;
                }
              } else if(!Game.Has('Lucky day')){
                if(Game.T % 27000 === 0 && Game.T != 0){
                  var newShimmer = new Game.shimmer("golden");
                  newShimmer.force = 'blab';
                  newShimmer.spawnLead = 1;
                }
              }
            }
          } else if(Game.elderWrath = 1){
            Game.shimmerTypes['golden'].time = 0;
            if (Game.shimmers.length === 0) {
              if(Game.Has('Serendipity')){
                if(Game.T % 2250 === 0 && Game.T != 0){
                  Game.Loader.Replace('goldCookie.png', this.dir + '/wrath.png');
                  var newShimmer = new Game.shimmer("golden");
                  newShimmer.force = 'clot';
                  newShimmer.spawnLead = 1;
                }
              } else if(Game.Has('Lucky day')){
                if(Game.T % 4500 === 0 && Game.T != 0){
                  Game.Loader.Replace('goldCookie.png', this.dir + '/wrath.png');
                  var newShimmer = new Game.shimmer("golden");
                  newShimmer.force = 'clot';
                  newShimmer.spawnLead = 1;
                }
              } else if(!Game.Has('Lucky day')){
                if(Game.T % 9000 === 0 && Game.T != 0){
                  Game.Loader.Replace('goldCookie.png', this.dir + '/wrath.png');
                  var newShimmer = new Game.shimmer("golden");
                  newShimmer.force = 'clot';
                  newShimmer.spawnLead = 1;
                }
              }
            }
          }
        });
    },
    save:function(){
    },
    load:function(str){
    },
});


