<template>
  <div class="wrapper">
    <div class="wrap">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-sm">
            col
          </div>
          <div class="col-sm">
            <el-form
              ref="subForm"
              :model="subForm"
              :rules="rules"
              label-width="120px"
            >
              <el-form-item label="Email" prop="email">
                <el-input
                  v-model="subForm.email"
                  placeholder="Enter your email"
                ></el-input>
              </el-form-item>
              <el-form-item label="Name" prop="name">
                <el-input
                  v-model="subForm.name"
                  placeholder="Enter your name"
                ></el-input>
              </el-form-item>
              <el-form-item label="Mobile Number:" prop="mobile">
                <el-input
                  v-model="subForm.mobile"
                  placeholder="Enter your mobile number"
                ></el-input>
              </el-form-item>
              <el-button type="primary" @click="onSubmit('subForm')"
                >Submit</el-button
              >
              <el-button type="warning" @click="onReset('subForm')"
                >Reset</el-button
              >
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Message } from "element-ui";

export default {
  name: "Subscribes",
  data() {
    return {
      subForm: {
        email: "",
        name: "",
        mobile: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please provide your name",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Length should be atleast minimun 3",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please provide your email!",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Please provide a proper email!",
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: true,
            message: "Please provide your mobile number",
            trigger: "blur",
          },
          {
            max: 10,
            message: "Mobile number must have 10 numbers!",
            trigger: "blur",
          },
        ],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(subForm) {
      console.log(this.subForm);
      let NewSubs = {
        email: this.subForm.email,
        name: this.subForm.name,
        mobile: this.subForm.mobile,
      };
      this.$refs[subForm].validate((valid) => {
        if (valid) {
          axios
            .post("http://localhost:2022/subscribe", NewSubs)
            .then((response) => {
              console.log(response);
              Message.success("Congrats! You are subcribed");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          Message.warning("Oops, this is a error message.");
          return false;
        }
      });
    },
    onReset(subForm) {
      this.$refs[subForm].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 600px;
  width: 100%;
  background-color: white;
}
.wrap {
  position: relative;
  top: 10%;
}
</style>
