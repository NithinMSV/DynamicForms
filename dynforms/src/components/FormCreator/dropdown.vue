<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
      <div id="tooltip-target-1" v-if="requiredstatus === 'accepted'">
      <p class="h3 mb-2"><b-icon icon="exclamation-circle-fill" animation="cylon" variant="danger"></b-icon></p>
    <b-tooltip target="tooltip-target-1" triggers="hover">
        You have chosen this field as mandatory
      </b-tooltip>
    </div>
        <h3>{{dropdown.text}}</h3>
    <b-form-select v-model="selected" value-field="text" :options="optionsSelections"></b-form-select>
    <div>Selected options: <strong>{{ selected }}</strong></div>
      </div>
      <div class="col-sm">
      <b-button id="show-btn" class="mt-2" variant="primary" @click="$bvModal.show('dropdown-properties')">Set Properties</b-button>

  <b-modal id="dropdown-properties" hide-footer>
    <template #modal-title>
      Dropdown Properties
    </template>
    <div class="d-block text-center">
      <b-form-group label="Enter the Label name">
      <b-form-input
            v-model="dropdown.text"
            placeholder="Enter the dropdown text"
            :disabled="!isDropdownEditing"
            :class="{ view: !isDropdownEditing }"
          ></b-form-input>
      </b-form-group>
          <div class="mt-2">Value: {{ dropdown.text }}</div>
        <b-button
          variant="outline-primary"
          class="mb-2"
          @click="isDropdownEditing = !isDropdownEditing"
          v-if="!isDropdownEditing"
        >
          <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button
        >
        <b-button
          @click="RadioSave"
          variant="outline-primary"
          class="mb-2"
          v-else-if="isDropdownEditing"
        >
          <b-icon icon="check2-square" aria-hidden="true"></b-icon>
          Save</b-button
        >
        <b-button
          class="mr-auto mb-2"
          @click="RadioCancel"
          variant="outline-warning"
          v-if="isDropdownEditing"
        >
          <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
          Cancel</b-button
        >
        <b-form-checkbox
      id="dropdown-required-checkbox"
      v-model="requiredstatus"
      name="dropdown-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
    <b-form-input v-model="selectedOption" v-on:keyup.enter="result(selectedOption)" placeholder="Enter the options"></b-form-input>
    <div>Update option: <strong>{{ selectedOption }}</strong></div>
    <b-button variant="outline-success" v-on:click="result(selectedOption)" class="mb-2">
        <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
    </b-button>
    <div>Updated options: <strong>{{ optionsSelections }}</strong></div>
    <p>Items inside/added the dropdown: </p>
    <ol>
      <li v-for="(optSelected,index) in optionsSelections" :key="index.id">
        {{optSelected.text}}
        <b-button variant="outline-danger" class="mb-2" @click="removeOptions(optSelected)">
          <b-icon icon="trash" aria-hidden="true"></b-icon>
        </b-button>
      </li>
    </ol>
    </div>
    <b-button class="mt-3" variant="danger" block @click="$bvModal.hide('dropdown-properties')">Close</b-button>
  </b-modal>        
    </div>
    </div>
    </div>
</template>

<script>
  export default {
      name: 'dropdown',
    data() {
      return {
        selected: '',
        selectedOption: '',
        optSelected: '',
        optionsSelections: [],
        requiredstatus: 'not_accepted',
        isDropdownEditing: false,
        counter: 0,
        dropdown: {
          text: 'Edit to rename me!'
        }
      }
    },
     mounted() {
    this.cachedRadio = Object.assign({}, this.radio);
  },
      methods: {
        result: function(selectedOption) {
      // alert("Clicked: " + selected);
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
      else {
      console.log(selectedOption);
      this.optionsSelections.push({
        text: this.selectedOption,
        value: this.counter+=1
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
    RadioSave() {
      this.cachedRadio = Object.assign({}, this.radio);
      this.isDropdownEditing = false;
    },
    RadioCancel() {
      this.radio = Object.assign({}, this.cachedRadio);
      this.isDropdownEditing = false;
    },
    }
  };
</script>

<style lang="scss" scoped>
li {
  text-align: left;
}
h3 {
  color: white;
}
.mb-2 {
  margin-left: 20px;
}
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
</style>