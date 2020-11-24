<template>
<div class="container">
    <div class="row">
      <div class="col-sm">
        <h3>Check Box Group Layout</h3>
        <p>{{checkboxgroup.item}}</p>
    <b-form-checkbox-group
      v-model="selected"
      :options="optionsSelections"
      class="mb-3"
      value-field="value"
      text-field="text"
      disabled-field="notEnabled"
      stacked
    ></b-form-checkbox-group>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
  <div class="col-sm props">
        <h3>Properties</h3>
         <b-form-checkbox
      id="required-checkbox"
      v-model="requiredstatus"
      name="required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
        <div>
          <b-form-input
            v-model="checkboxgroup.item"
            placeholder="Enter the checkbox text"
            :disabled="!isCheckBoxGroupEditing"
            :class="{ view: !isCheckBoxGroupEditing }"
          ></b-form-input>
          <div class="mt-2">Value: {{ checkboxgroup.item }}</div>
        </div>
        <b-button
          variant="outline-primary"
          class="mb-2"
          @click="isCheckBoxGroupEditing = !isCheckBoxGroupEditing"
          v-if="!isCheckBoxGroupEditing"
        >
          <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button
        >
        <b-button
          @click="RadioSave"
          variant="outline-primary"
          class="mb-2"
          v-else-if="isCheckBoxGroupEditing"
        >
          <b-icon icon="check2-square" aria-hidden="true"></b-icon>
          Save</b-button
        >
        <b-button
          class="mr-auto mb-2"
          @click="RadioCancel"
          variant="outline-warning"
          v-if="isCheckBoxGroupEditing"
        >
          <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
          Cancel</b-button
        >
         <b-form-input v-model="groupSelectedOption" v-on:keyup.enter="result(groupSelectedOption)" placeholder="Enter the options"></b-form-input>
    <div>Update option: <strong>{{ groupSelectedOption }}</strong></div>
    <b-button variant="outline-success" v-on:keyup.enter="result(groupSelectedOption)" v-on:click="result(groupSelectedOption)" class="mb-2">
        <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
    </b-button>
    <div>Updated options: <strong>{{ optionsSelections }}</strong></div>
    <p>Items inside/added the radio: </p>
    <ol>
      <li v-for="(groupOptSelected,index) in optionsSelections" :key="index.id">
        {{groupOptSelected.text}}
        <b-button variant="outline-danger" class="mb-2" @click="removeOptions(groupOptSelected)">
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
      name: 'checkboxgroup',
    data() {
      return {
        selected: [],
        checkboxgroup: {
            item: 'Edit to rename me!'
        },
        isCheckBoxGroupEditing: false,
        groupSelectedOption: '',
        optionsSelections: [],
        groupOptSelected: '',
        requiredstatus: 'not_accepted',
      }
    },
    mounted() {
    this.cachedCheckBoxGroup = Object.assign({}, this.checkboxgroup);
  },
    methods: {
        result: function(groupSelectedOption) {
      // alert("Clicked: " + selected);
      console.log(groupSelectedOption);
      if (this.groupSelectedOption === ''|| this.groupSelectedOption === null || this.groupSelectedOption === 0){
        this.$toast.open({
          message: 'Please enter the option in the text box',
          duration: 3000,
          type: 'warning',
          position: 'top'
        })
      }
      else if(this.optionsSelections.some(option => option.text === this.groupSelectedOption)) {
        this.$toast.open({
          message: 'Option is already exist! Please enter different option!',
          duration: 3000,
          type: 'warning',
          position: 'top'
        })
      }
      else{
      this.optionsSelections.push({
        text: this.groupSelectedOption,
        value: this.groupSelectedOption
      });
      this.groupSelectedOption = '';
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
     RadioSave() {
      this.cachedCheckBoxGroup = Object.assign({}, this.checkboxgroup);
      this.isCheckBoxGroupEditing = false;
    },
    RadioCancel() {
      this.checkboxgroup = Object.assign({}, this.cachedCheckBoxGroup);
      this.isCheckBoxGroupEditing = false;
    },
  }
  }
</script>

<style lang="scss" scoped>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}

h3 {
  color: white;
}
</style>