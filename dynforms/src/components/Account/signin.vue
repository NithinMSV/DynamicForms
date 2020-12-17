<template>
  <div class="sign-in">
    <h3>Sign In</h3>
    <el-form
      ref="signinform"
      :model="signinform"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="Username" prop="username">
        <el-input
          v-model="signinform.username"
          placeholder="Enter your username"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="signinform.password"
          type="password"
          placeholder="Enter your password"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="signInSubmit('signinform')"
        >Submit</el-button
      >
      <el-button type="warning" @click="onReset('signinform')">Reset</el-button>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";

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
      rules: {
        username: [
          {
            required: true,
            message: "Please provide your username!",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Length should be atleast minimun 6",
            trigger: "blur",
          },
          {
            max: 15,
            message: "Length should be atleast maximum 15",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please provide your password!",
            trigger: "blur",
          },
          {
            min: 8,
            message: "Length should be atleast minimum 8",
            trigger: "blur",
          },
          {
            max: 15,
            message: "Length should be atleast maximum 15",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    signInSubmit(signinform) {
      let newSignIn = {
        username: this.signinform.username,
        password: this.signinform.password,
      };
      // let final = JSON.stringify(this.signinform);
      this.$refs[signinform].validate((valid) => {
        if (valid) {
          Message.success("Signed in");
          console.log(newSignIn);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onReset(signinform) {
      this.$refs[signinform].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  position: relative;
}
</style>
