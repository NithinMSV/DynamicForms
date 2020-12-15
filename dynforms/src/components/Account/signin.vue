<template>
  <div class="sign-in">
    <h3>Sign In</h3>
    <label for="signinuserid">Username</label>
    <b-form-input
      id="signinuserid"
      type="text"
      v-model="signinform.username"
      placeholder="Enter your username"
    ></b-form-input>
    <label for="signinuserpd">Password</label>
    <b-form-input
      id="signinuserpd"
      type="password"
      v-model="signinform.password"
      placeholder="Enter your password"
    ></b-form-input>
    <b-button @click="signInSubmit" class="mt-2" variant="primary"
      >Sign In</b-button
    >
    <div>
      <el-radio v-model="radio1" label="1" border>Option A</el-radio>
      <el-radio v-model="radio1" label="2" border>Option B</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
  components: {},
  data() {
    return {
      radio1: "1",
      signinform: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signInSubmit() {
      const newform = JSON.stringify(this.signinform);
      alert(newform);
      this.signinform = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  position: relative;
}
</style>
