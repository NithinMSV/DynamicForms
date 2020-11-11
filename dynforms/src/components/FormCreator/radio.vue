<template>
  <div class="container">
    <div class="row">
    <div class="col-10">
    <b-form-group>
      <b-form-radio v-model="selected" name="some-radios" value="A"><b-form-input v-model="text" placeholder="Enter the option"></b-form-input>
      </b-form-radio>
    </b-form-group>
    </div>
    <div class="col-2">
      <b-button variant="outline-success" v-on:click="addFormElement(inputType)" class="mb-2">
          <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
        </b-button>
    </div>
    <!-- <div class="mt-2">Value: {{ text }}</div>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
  </div>
  </div>
</template>

<script>

export default {
    name: 'radio',
    components: {
    },
    data() {
      return {
        selected: '',
        optionSelected: [],
        value: [],
        text: '',
        optionArray: []
      }
    },
    methods: {

  }
}
</script>