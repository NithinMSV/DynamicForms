<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h3>Radio Layout</h3>
      <b-form-radio-group
      v-model="selected" 
      :options="optionsSelections"
      value-field="value"
      text-field="text" 
      name="radios-stacked" stacked>
      </b-form-radio-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      </div>
      <div class="col-sm">
        <h3>Properties</h3>
    <b-form-input v-model="selectedOption" v-on:keyup.enter="result(selectedOption)" placeholder="Enter the options"></b-form-input>
    <div>Update option: <strong>{{ selectedOption }}</strong></div>
    <b-button variant="outline-success" v-on:click="result(selectedOption)" class="mb-2">
        <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
    </b-button>
    <div>Updated options: <strong>{{ optionsSelections }}</strong></div>
    <p>Items inside/added the radio: </p>
    <ol>
      <li v-for="(optSelected,index) in optionsSelections" :key="index.id">
        {{optSelected.text}}
        <b-button variant="outline-danger" class="mb-2" @click="removeOptions(optSelected)">
          <b-icon icon="trash" aria-hidden="true"></b-icon>
        </b-button>
      </li>
    </ol>
  </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'radio',
    data() {
      return {
        selected: '',
        selectedOption: '',
        optSelected: '',
        optionsSelections: [],
        counter: 0,
        exists: null
      }
    },
    methods: {
        result: function(selectedOption) {
      // alert("Clicked: " + selected);
      console.log(selectedOption);
      if (this.selectedOption === ''|| this.selectedOption === null || this.selectedOption === 0){
        this.$toast.open({
          message: 'Please enter the option in the text box',
          duration: 3000,
          type: 'warning',
          position: 'top'
        })
      }
      else if(this.optionsSelections.some(option => option.text === this.selectedOption)) {
        this.$toast.open({
          message: 'Option is already exist! Please enter different option!',
          duration: 3000,
          type: 'warning',
          position: 'top'
        })
      }
      else{
      this.optionsSelections.push({
        text: this.selectedOption,
        value: this.selectedOption
      });
      this.selectedOption = '';
      console.log(this.optionsSelections);
      this.$toast.open({
          message: 'Option is successfully added!',
          duration: 3000,
          type: 'success',
          position: 'top'
        })
    }
    },
    removeOptions(optSelected) {
      const selectedIndex = this.optionsSelections.indexOf(optSelected);
      this.optionsSelections.splice(selectedIndex, 1);
      this.$toast.open({
          message: 'Option is successfully removed!',
          duration: 3000,
          type: 'success',
          position: 'top'
        })
    },
  }
  }
</script>

<style lang="scss" scoped>
li {
  text-align: left;
}

h3 
{
  color: white;
}

.mb-2 {
  margin-left: 20px;
}
</style>