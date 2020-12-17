<template>
  <div class="sign-up">
    <h3>Sign Up</h3>
    <div class="sign-up">
      <el-form
        ref="signupform"
        :model="signupform"
        :rules="rules"
        label-width="120px"
        status-icon
      >
        <el-form-item label="Email" prop="email">
          <el-input
            v-model="signupform.email"
            placeholder="Enter your email"
            type="email"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="signupform.password"
            placeholder="Enter your password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="confirm">
          <el-input
            v-model="signupform.confirm"
            placeholder="Enter your password again"
            type="password"
          ></el-input>
        </el-form-item>
        <el-button type="primary" @click="signUpSubmit('signupform')"
          >Submit</el-button
        >
        <el-button type="warning" @click="onReset('signupform')"
          >Reset</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";

export default {
  name: "signup",
  components: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.signupform.confirm !== "") {
          this.$refs.signupform.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.signupform.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      signupform: {
        email: "",
        password: "",
        confirm: "",
      },
      rules: {
        email: {
          required: true,
          type: "email",
          message: "Please input correct email address",
          trigger: ["blur", "change"],
        },
        password: {
          required: true,
          validator: validatePass,
          trigger: "blur",
        },
        confirm: {
          required: true,
          validator: validatePass2,
          trigger: "blur",
        },
      },
    };
  },
  methods: {
    signUpSubmit(signupform) {
      let newSignIn = {
        email: this.signupform.email,
        password: this.signupform.password,
        confirm: this.signupform.confirm,
      };
      // let final = JSON.stringify(this.signupform);
      this.$refs[signupform].validate((valid) => {
        if (valid) {
          Message.success("Signed in");
          console.log(newSignIn);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onReset(signupform) {
      this.$refs[signupform].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  position: relative;
}
</style>
