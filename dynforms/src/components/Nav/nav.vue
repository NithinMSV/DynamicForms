<template>
  <div class="navclass">
    <img class="logo" src="#" alt="logo" />
    <nav>
      <ul class="navlinks">
        <li><a href="#">Templates</a></li>
        <li><a href="/creator">My Forms</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><el-link href="#" :underline="false">Support</el-link></li>
      </ul>
    </nav>
    <section class="account-button">
      <el-button @click="$router.push('account')" type="primary" round>
        Sign In</el-button
      >
      <el-button type="primary" @click="$router.push('account')" round>
        Sign Up</el-button
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "navigation",
  methods: {},
};
</script>

<style lang="scss" scoped>
.navclass {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  padding: 10px 10%;
}

li,
a,
button {
  font-size: 16px;
  text-decoration: none;
}

.logo {
  cursor: pointer;
  margin-right: auto;
}

.navlinks {
  margin-top: 15px;
  list-style: none;
  li {
    display: inline-block;
    padding: 0px 20px;
  }

  li a {
    color: aqua;
    transition: all 0.3s ease 0s;
    text-decoration: none;
  }

  li a:hover {
    color: white;
  }
}

// button {
//   margin-left: 20px;
//   padding: 9px 25px;
//   background-color: rgb(40, 51, 197);
//   border: none;
//   color: white;
//   border-radius: 50px;
//   cursor: pointer;
//   transition: all 0.3s ease 0s;
// }

// button:hover {
//   background-color: aqua;
// }
</style>
