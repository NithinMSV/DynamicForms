<template>
  <div class="sign-up">
    <h3>Sign Up</h3>
    <div class="sign-up">
      <label for="signupuserid">Username</label>
      <b-form-input
        id="signupuserid"
        type="text"
        v-model="signupform.username"
        placeholder="Enter your username"
      ></b-form-input>
      <label for="signupuserpd">Password</label>
      <b-form-input
        id="signupuserpd"
        type="password"
        v-model="signupform.password"
        placeholder="Enter password"
      ></b-form-input>
      <label for="signupuserpdrpt">Repeat Password</label>
      <b-form-input
        id="signupuserpdrpt"
        type="password"
        v-model="signupform.repeatpassword"
        placeholder="Enter your password again"
      ></b-form-input>
      <b-button @click="signUpSubmit" class="mt-2" variant="primary"
        >Sign Up</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  components: {},
  data() {
    return {
      signupform: {
        username: "",
        password: "",
        repeatpassword: "",
      },
    };
  },
  methods: {
    signUpSubmit() {
      const newform = JSON.stringify(this.signupform);
      alert(newform);
      this.signupform = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  position: relative;
}
</style>
