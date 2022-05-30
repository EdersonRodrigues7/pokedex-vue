Vue.component('about-page', {
  template: `
    <div>
      <router-link to="/" class="back-button"></router-link>
      <div class="poke-profile">
        <div>#{{$route.params.number}} - {{pkm.name}}</div>
        <img
          :src="'https://serebii.net/sunmoon/pokemon/' +$route.params.number+'.png'"
          alt=""
          class="poke-sprite"
        />
      </div>
      <ul class="poke-types" >
        <li v-for="type in pkm.types" >
          <img :src="'https://serebii.net/pokedex-rs/type/'+type.name+'.gif'" />
        </li>
      </ul>
      <table class="stats" >
        <tr>
          <td>Attack</td>
          <td>Defense</td>
          <td>SP Atk</td>
          <td>SP Def</td>
          <td>Speed</td>
        </tr>
        <tr>
          <td>{{pkm.attack}}</td>
          <td>{{pkm.defense}}</td>
          <td>{{pkm.sp_atk}}</td>
          <td>{{pkm.sp_def}}</td>
          <td>{{pkm.speed}}</td>
        </tr>
      </table>
    </div>
  `,
  data: function () {
    return {
      pkm: { types: [] }
    };
  },
  mounted: function () {
    PokeService.API.Pokemon.find(this.$route.params.number).then(pokemon => {
      this.pkm = pokemon;
    });
  }
});
