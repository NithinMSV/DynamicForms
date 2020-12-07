<template>
    <div class="easymode">
        <h1>Easy Mode</h1>
        <!-- <p>{{steps[incr]}}</p>
        <p>{{incr}}</p> -->
        <div v-if="incr === 0">
            <h1>I'm Type</h1>
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-4">
        <b-form-input v-model="search" placeholder="Which type of form you want to create?"></b-form-input>
        <div class="mt-2">Value: {{ search }}</div>
        </div>
        <div class="col-4">
            <b-button variant="outline-primary">Search</b-button>
        </div>
        </div>
        <div class="d-flex flex-row flex-wrap mb-3">
        <div v-for="(type, index) in filteredType" :key="index">
            <div class="p-2">
            <b-form-group>
            <b-form-radio v-model="radioselected" name="some-radios" :value="type.name">
            <b-card border-variant="primary">
                <b-card-text>
                    {{type.name}}
                </b-card-text>
                
            </b-card>
            </b-form-radio>
            </b-form-group>
            </div>
            </div>
        </div>
        <div>
            {{radioselected}}
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
        <b-button class="ml-2" variant="success" @click="incr++" :disabled="incr >= steps.length - 1 || radioselected === ''">Next</b-button>      
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'EasyMode',
    components: {

    },
    data() {
        return {
            radioselected: '',
            search: '',
            types: [],
            incr: 0,
            steps: ['Type', 'Template', 'Fields'],
            selected: 'first',
        }
    },
    mounted() {
        axios.get('http://localhost:2022/formtype')
        .then((response) => {
            console.log(response.data);
            this.types = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    computed: {
        filteredType() {
            return this.types.filter(formtype => {
                return formtype.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.easymode {
    position: relative;
}

b-form-group {
    opacity: 0.0;
}
</style>