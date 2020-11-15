<template>
  <div>
      <b-form-radio-group
      v-model="selected" 
      :options="optionsSelections"
      value-field="value"
      text-field="text" 
      name="radios-stacked" stacked>
      </b-form-radio-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>

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
        alert("Option not entered!")
      }
      else if(this.optionsSelections.some(option => option.text === this.selectedOption)) {
        alert("Option '"+selectedOption+ "' already exist")
      }
      else{
      this.optionsSelections.push({
        text: this.selectedOption,
        value: this.selectedOption
      });
      this.selectedOption = '';
      console.log(this.optionsSelections);
      alert("Your option " + "'" + selectedOption + "' "+"is successfully added!")
    }
    },
    removeOptions(optSelected) {
      const selectedIndex = this.optionsSelections.indexOf(optSelected);
      this.optionsSelections.splice(selectedIndex, 1);
    },
  }
  }
</script>

<style lang="scss" scoped>
li {
  text-align: left;
}

.mb-2 {
  margin-left: 20px;
}
</style>