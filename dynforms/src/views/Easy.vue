<template>
    <div class="easymode">
        <h1>Easy Mode</h1>
        <!-- <p>{{steps[incr]}}</p>
        <p>{{incr}}</p> -->
        <div v-if="incr === 0">
            <h1>I'm Type</h1>
    <div class="container">
        <div class="row">
        <div class="col">
        <ul class="list-group">
        <b-form-group >
  <li class="list-group-item" v-for="(option, index) in optionLimited1" :key="index">
      <div class="custom-control custom-radio">
        <input type="radio" :id="index" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" :for="index">{{option.text}}</label>
      </div>
        </li>
        </b-form-group>
        </ul>
    </div>
    <div class="col">
        <ul class="list-group">
        <b-form-group >
  <li class="list-group-item" v-for="(option, index) in optionLimited2" :key="index">
      <div class="custom-control custom-radio">
        <input type="radio" :id="index" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" :for="index">{{option.text}}</label>
      </div>
        </li>
        </b-form-group>
        </ul>
    </div>
    <div class="col">
        <ul class="list-group">
        <b-form-group >
  <li class="list-group-item" v-for="(option, index) in optionLimited3" :key="index">
      <div class="custom-control custom-radio">
        <input type="radio" :id="index" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" :for="index">{{option.text}}</label>
      </div>
        </li>
        </b-form-group>
        </ul>
    </div>
    <div class="col">
        <ul class="list-group">
        <b-form-group >
  <li class="list-group-item" v-for="(option, index) in optionLimited4" :key="index">
      <div class="custom-control custom-radio">
        <input type="radio" :id="index" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" :for="index">{{option.text}}</label>
      </div>
        </li>
        </b-form-group>
        </ul>
    </div>
    <div class="col">
        <ul class="list-group">
        <b-form-group >
  <li class="list-group-item" v-for="(option, index) in optionLimited5" :key="index">
      <div class="custom-control custom-radio">
        <input type="radio" :id="index" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" :for="index">{{option.text}}</label>
      </div>
        </li>
        </b-form-group>
        </ul>
    </div>
    </div>
    </div>
        </div>
        <div v-if="incr === 1">
            <h1>I'm Template</h1>
        </div>
        <div v-if="incr === 2">
            <h1>I'm Fields</h1>
        </div>
        <b-button variant="success" @click="incr--" :disabled="incr <= 0">Back</b-button>
        <b-button variant="success" @click="incr++" :disabled="incr >= steps.length - 1 || selectedType === ''">Next</b-button>      
    </div>
</template>

<script>
export default {
    name: 'EasyMode',
    components: {

    },
    data() {
        return {
            selectedType: '',
            incr: 0,
            steps: ['Type', 'Template', 'Fields'],
            selected: 'first',
            options: [
            { text: 'Agreement Forms', value: 'Agreement' },
            { text: 'Application Forms', value: 'Application' },
            { text: 'Appointment Forms', value: 'Appointment' },
            { text: 'Assessment Forms', value: 'Assessment' },
            { text: 'Booking Forms', value: 'Booking' },
            { text: 'Business Forms', value: 'Business' },
            { text: 'COVID Forms', value: 'COVID' },
            { text: 'Calculation Forms', value: 'Calculation' },
            { text: 'Church Forms', value: 'Church' },
            { text: 'Consent Forms', value: 'Consent' },
            { text: 'Contact Forms', value: 'Contact' },
            { text: 'Donation Forms', value: 'Donation' },
            { text: 'Employment Forms', value: 'Employment' },
            { text: 'Evaluation Forms', value: 'Evaluation' },
            { text: 'Feedback Forms', value: 'Feedback' },
            { text: 'Human Resources Forms', value: 'Human Resources' },
            { text: 'Insurance Forms', value: 'Insurance' },
            { text: 'Lead Generation Forms', value: 'Lead Generation' },
            { text: 'Medical Forms', value: 'Medical' },
            { text: 'Membership Forms', value: 'Membership' },
            { text: 'Onboarding Forms', value: 'Onboarding' },
            { text: 'Order Forms', value: 'Order' },
            { text: 'Payment Forms', value: 'Payment' },
            { text: 'Petition Forms', value: 'Petition' },
            { text: 'Photography Forms', value: 'Photography' },
            { text: 'Poll Forms', value: 'Poll' },
            { text: 'Questionnaire Forms', value: 'Questionnaire' },
            { text: 'Quiz Forms', value: 'Quiz' },
            { text: 'Quote Forms', value: 'Quote' },
            { text: 'RSVP Forms', value: 'RSVP' },
            { text: 'Real Estate Forms', value: 'Real Estate' },
            { text: 'Referral Forms', value: 'Referral' },
            { text: 'Registration Forms', value: 'Registration' },
            { text: 'Report Forms', value: 'Report' },
            { text: 'Request Forms', value: 'Request' },
            { text: 'Reservation Forms', value: 'Reservation' },
            { text: 'Signup Forms', value: 'Signup' },
            { text: 'Subscription Forms', value: 'Subscription' },
            { text: 'Survey Forms', value: 'Survey' },
            { text: 'Travel Forms', value: 'Travel' },
            { text: 'Volunteer Forms', value: 'Volunteer' },
            ]
        }
    },
    computed: {
        optionLimited1() {
        return this.options.slice(0, 10)
    },
        optionLimited2() {
        return this.options.slice(11, 21)
    },
        optionLimited3() {
        return this.options.slice(12, 22)
    },
        optionLimited4() {
        return this.options.slice(23, 33)
    },
        optionLimited5() {
        return this.options.slice(34, 41)
    }
    }
}
</script>

<style lang="scss" scoped>
.easymode {
    position: relative;
}
</style>