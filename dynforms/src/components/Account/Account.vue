<template>
  <div class="acc">
    <h3>Account</h3>
    <div class="arrange">
      <div
        class="card text-center text-dark bg-light mb-3 border border-dark"
        style="width: 20rem;"
      >
        <div class="card-body">
          <div v-show="signInShow == true" class="sign-in">
            <sign-in></sign-in>
            <a class="card-link" @click="showSignUp">Create an account</a>
          </div>
          <div v-show="signInShow == false" class="sign-up">
            <sign-up></sign-up>
            <a class="card-link mt-2" @click="showSignIn"
              >Already have an account?</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signin from "./signin";
import signup from "./signup";

export default {
  name: "account",
  components: {
    "sign-in": signin,
    "sign-up": signup,
  },
  data() {
    return {
      signInShow: true,
      signUpShow: false,
    };
  },
  methods: {
    showSignUp() {
      this.signInShow = false;
      this.signUpShow = true;
      return this.signInShow;
    },
    showSignIn() {
      this.signInShow = true;
      this.signUpShow = false;
      return this.signInShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.acc {
  position: relative;
}

.arrange {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 20%);
}
</style>
