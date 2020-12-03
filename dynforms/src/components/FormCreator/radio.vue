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
        <h3>{{radio.text}}</h3>
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
      <b-button id="show-btn" class="mt-2" variant="primary" @click="$bvModal.show('radio-properties')">Set Properties</b-button>

  <b-modal id="radio-properties" hide-footer>
    <template #modal-title>
      Radio Properties
    </template>
    <div class="d-block text-center">
      <b-form-checkbox
      id="radio-required-checkbox"
      v-model="requiredstatus"
      name="radio-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
        <div>
          <b-form-group label="Enter the Label name">
          <b-form-input
            v-model="radio.text"
            placeholder="Enter the checkbox text"
            :disabled="!isRadioEditing"
            :class="{ view: !isRadioEditing }"
          ></b-form-input>
          </b-form-group>
          <div class="mt-2">Value: {{ radio.text }}</div>
        </div>
        <b-button
          variant="outline-primary"
          class="mb-2"
          @click="isRadioEditing = !isRadioEditing"
          v-if="!isRadioEditing"
        >
          <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button
        >
        <b-button
          @click="RadioSave"
          variant="outline-primary"
          class="mb-2"
          v-else-if="isRadioEditing"
        >
          <b-icon icon="check2-square" aria-hidden="true"></b-icon>
          Save</b-button
        >
        <b-button
          class="mr-auto mb-2"
          @click="RadioCancel"
          variant="outline-warning"
          v-if="isRadioEditing"
        >
          <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
          Cancel</b-button
        >
    <div>
      <b-form-group label="Enter the options:">
    <b-form-input v-model="selectedOption" v-on:keyup.enter="result(selectedOption)" placeholder="Enter the options"></b-form-input>
      </b-form-group>
    <div>Update option: <strong>{{ selectedOption }}</strong></div>
    <b-button variant="outline-success" v-on:keyup.enter="result(selectedOption)" v-on:click="result(selectedOption)" class="mb-2">
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
    <b-button class="mt-3" variant="danger" block @click="$bvModal.hide('radio-properties')">Close</b-button>
    </div>
  </b-modal>
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
        exists: null,
        isRadioEditing: false,
        requiredstatus: 'not_accepted',
        radio: {
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
     RadioSave() {
      this.cachedRadio = Object.assign({}, this.radio);
      this.isRadioEditing = false;
    },
    RadioCancel() {
      this.radio = Object.assign({}, this.cachedRadio);
      this.isRadioEditing = false;
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
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
</style>