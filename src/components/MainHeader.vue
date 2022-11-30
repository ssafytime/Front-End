<template>
  <b-div>
    <header id="header">
      <nav>
        <router-link :to="{ name: 'MainPage' }" class="logocase">
          <img src="@/assets/stlogo.jpg" alt="" class="logo" />
        </router-link>

        <li class="left">
          <router-link :to="{ name: 'Appboard' }" id="board">
            Board
          </router-link>
        </li>
        <li class="left">
          <router-link :to="{ name: 'Appbus' }" id="bus"> Bus </router-link>
        </li>
        <li class="left">
          <router-link :to="{ name: 'AppTime' }" id="tt">
            Time Table
          </router-link>
        </li>
      </nav>
    </header>
  </b-div>
</template>

<script>
export default {
  name: "MainHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.logocase {
  margin-left: 186px;
  margin-top: 31px;
}
.logo {
  /* top: 31px;
  left: 186px; */
  width: 36px;
  height: 60px;
  transform: matrix(0, -1, 1, 0, 0, 0);
  /* UI Properties */

  opacity: 1;
}

nav {
  /* Layout Properties */
  top: 0px;
  left: -6px;
  width: 100vw;
  height: 97px;
  /* UI Properties */
  border: 1px solid var(--unnamed-color-707070);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 5px #00000029;
  border: 1px solid #707070;
  opacity: 1;
}
#board {
  top: 42px;
  left: 388px;
  width: 48px;
  height: 24px;
  /* UI Properties */
  color: var(--unnamed-color-000000);
  text-align: left;
  font: normal normal normal 20px/24px Impact;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
/* #logo {
  top: 31px;
  left: 186px;
  width: 60px;
  height: 36px;
  transform: matrix(0, -1, 1, 0, 0, 0);

  background: transparent url("../assets/logo.png") 0% 0% no-repeat padding-box;
  opacity: 1;
} */
#bus {
  top: 38px;
  left: 534px;
  width: 30px;
  height: 24px;
  /* UI Properties */
  color: var(--unnamed-color-000000);
  text-align: left;
  font: normal normal normal 20px/24px Impact;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

#tt {
  top: 38px;
  left: 655px;
  width: 100px;
  height: 24px;
  /* UI Properties */
  color: var(--unnamed-color-000000);
  text-align: left;
  font: normal normal normal 20px/24px Impact;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

.left {
  display: inline-block;
  margin-top: 38px;
  /* UI Properties */
  opacity: 1;
  margin-left: 91px;
}
.left > #board {
  margin-left: 149px;
}
</style>
