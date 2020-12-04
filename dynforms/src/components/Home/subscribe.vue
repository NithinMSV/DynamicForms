<template>
    <div class="wrapper">
    <div class="wrap">
    <div class="container">
    <div class="row justify-content-around">
    <div class="col-sm">
        col
    </div>
    <div class="col-sm">
    <!-- <div class="card bg-light border-secondary mb-3" style="max-width: 30rem;"> -->
      <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter your email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter your name"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-3" label="Your Mobile:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="tel"
          v-model="form.mobile"
          required
          placeholder="Enter your mobile number"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" class="ml-2" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <!-- </div> -->
    </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'Subscribes', 
    data() {
      return {
        form: {
          email: '',
          name: '',
          mobile: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        console.log(this.form)
        let NewSubs ={
            email: this.form.email,
            name: this.form.name,
            mobile: this.form.mobile
        }
        axios.post('http://localhost:2022/subscribe', NewSubs)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.mobile = ''
      }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    height: 600px;
    width: 100%;
    background-color: orange;
}
.wrap {
    position: relative;
    top: 10%;
}
</style>