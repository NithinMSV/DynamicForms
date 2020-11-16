<template>
    <b-form-radio v-model="selected" name="some-radios" :value="value"><b-form-input v-model="text" placeholder="Enter the option"><slot /></b-form-input>
    </b-form-radio>
</template>

<script>
export default {
    name: 'OptionTemp',
    props: ['value'],
    data(){
        return {
            selected: '',
            text: ''
        }
    }
}
</script>