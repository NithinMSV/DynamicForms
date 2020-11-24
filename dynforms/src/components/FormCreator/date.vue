<template>
  <div class="container">
    <div class="row">
      <h3>Date Layout</h3>
      <div class="col-sm">
    <label for="example-datepicker" v-show="adddate === 'accepted'">Choose a '{{save.firstdate}}' date</label>
    <label for="example-datepicker" v-show="adddate === 'not_accepted'">{{save.firstdate}}</label>
    <b-form-datepicker id="example-datepicker" v-model="fromdate" class="mb-2"></b-form-datepicker>
    <p>Date Selected: '{{ fromdate }}'</p>
    </div>
    <div v-show="adddate === 'accepted'" class="col">
      <label for="example-datepicker" v-show="adddate === 'accepted'">Choose a '{{save.seconddate}}' date</label>
      <b-form-datepicker id="example-datepicker" v-model="todate" class="mb-2"></b-form-datepicker>
    <p>Value: '{{ todate }}'</p>
    </div>
    </div>
    <div class="row">
      <h3>Properties</h3>
    </div>
    <div class="row">
      <div class="col">
      <b-form-checkbox
      id="date-required-checkbox"
      v-model="requiredstatus"
      name="date-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
    <b-form-checkbox
      id="add-date-required-checkbox"
      v-model="adddate"
      name="add-date-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Click here to add 'To' date
    </b-form-checkbox>
    </div>
    <div class="col-sm">
    <b-form-group 
          label="Enter the Date Label">
      <b-form-input v-model="save.firstdate" placeholder="Enter text box name" :disabled="!isFirstDateLabelEditing"
           :class="{labelview: !isFirstDateLabelEditing}"></b-form-input>
    <div class="mt-2">First Date Label Entered: {{ save.firstdate }}</div>
     <b-button variant="outline-primary" class="mb-2" @click="isFirstDateLabelEditing = !isFirstDateLabelEditing" v-if="!isFirstDateLabelEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="fromDateSave" variant="outline-primary" class="mb-2" v-else-if="isFirstDateLabelEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="fromDateCancel" variant="outline-warning" v-if="isFirstDateLabelEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
      </b-form-group>
      <div v-show="adddate === 'accepted'">
    <b-form-group 
          label="Enter the Second Date Label">
      <b-form-input v-model="save.seconddate" placeholder="Enter text box name" :disabled="!isSecondDateLabelEditing"
           :class="{labelview: !isSecondDateLabelEditing}"></b-form-input>
    <div class="mt-2">Second Date Label Entered: {{ save.seconddate }}</div>
     <b-button variant="outline-primary" class="mb-2" @click="isSecondDateLabelEditing = !isSecondDateLabelEditing" v-if="!isSecondDateLabelEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="toDateSave" variant="outline-primary" class="mb-2" v-else-if="isSecondDateLabelEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="toDateCancel" variant="outline-warning" v-if="isSecondDateLabelEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
      </b-form-group>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'date',
    data() {
      return {
        fromdate: '',
        todate: '',
        requiredstatus: 'not_accepted',
        adddate: 'not_accepted',
        isFirstDateLabelEditing: false,
        isSecondDateLabelEditing: false,
        save: {
          firstdate: 'Edit to rename me!',
          seconddate: 'Edit to rename me!'
        }
      }
    },
    mounted() {
    this.cachedLabel = Object.assign({},this.save);
  },
  methods: {
    fromDateSave() {
      this.cachedLabel = Object.assign({}, this.save);
      this.isFirstDateLabelEditing = false;
    },
    fromDateCancel() {
      this.save = Object.assign({}, this.cachedLabel);
      this.isFirstDateLabelEditing = false;
    },
    toDateSave() {
      this.cachedLabel = Object.assign({}, this.save);
      this.isSecondDateLabelEditing = false;
    },
    toDateCancel() {
      this.save = Object.assign({}, this.cachedLabel);
      this.isSecondDateLabelEditing = false;
    }
  }
  }
</script>

<style lang="scss" scoped>
h3 {
  color: white;
}
</style>