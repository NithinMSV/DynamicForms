<template>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <b-form-group
      label-cols-sm="2"
      :label="address.label"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="4"
        label="Street:"
        label-align-sm="right"
        label-for="nested-street"
      >
        <b-form-input id="nested-street" v-model="street_name" placeholder="Enter street name"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="4"
        label="City:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city" v-model="city_name" placeholder="Enter city name"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="4"
        label="State:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state" v-model="state_name" placeholder="Enter state name"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="4"
        label="Country:"
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-form-input id="nested-country" v-model="country_name" placeholder="Enter country name"></b-form-input>
      </b-form-group>

      <!-- <b-form-group
        label-cols-sm="3"
        label="Ship via:"
        label-align-sm="right" class="mb-0"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['Air', 'Courier', 'Mail']"
        >
        </b-form-radio-group>
      </b-form-group> -->
    </b-form-group>
    </div>
  </div>
  <div class="row">
    <div class="col-sm align">
      <h3>Properties</h3>
      <div class="w-50">
      <b-form-input
            label="Enter the Address Label text"
            v-model="address.label"
            placeholder="Enter the Address Label text"
            :disabled="!isAddressLabelEditing"
            :class="{ view: !isAddressLabelEditing }"
          ></b-form-input>
      </div>
          <div class="mt-2">Value: {{ address.label }}</div>
        <b-button
          variant="outline-primary"
          class="mb-2"
          @click="isAddressLabelEditing = !isAddressLabelEditing"
          v-if="!isAddressLabelEditing"
        >
          <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button
        >
        <b-button
          @click="addressSave"
          variant="outline-primary"
          class="mb-2"
          v-else-if="isAddressLabelEditing"
        >
          <b-icon icon="check2-square" aria-hidden="true"></b-icon>
          Save</b-button
        >
        <b-button
          class="mr-auto mb-2"
          @click="addressCancel"
          variant="outline-warning"
          v-if="isAddressLabelEditing"
        >
          <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
          Cancel</b-button
        >
        <b-form-checkbox
      id="required-address"
      v-model="requiredstatus"
      name="required-address"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
    <div>{{requiredstatus}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Address',
    components: {

    },
    data(){
      return {
        address: {
          label:'Edit to rename me!'
        },
        requiredstatus: 'not_accepted',
        isAddressLabelEditing: false,
        street_name: '',
        city_name: '',
        state_name: '',
        country_name: '',
      }
    },
    mounted() {
    this.cachedAddress = Object.assign({}, this.address);
  },
  methods: {
    addressSave() {
      this.cachedAddress = Object.assign({}, this.address);
      this.isAddressLabelEditing = false;
    },
    addressCancel() {
      this.address = Object.assign({}, this.cachedAddress);
      this.isAddressLabelEditing = false;
    },
  }
}
</script>

<style lang="scss" scoped>
h3 {
  color: white;
}
.align {
  text-align: center;
}
</style>