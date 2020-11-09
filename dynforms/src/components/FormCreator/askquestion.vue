<template>
    <div>
        <TextField v-model="question" placeholder="Ask a question here" />
        <Message placeholder="Answer Area" />
    </div>
</template>

<script>

import TextField from './text'
import Message from './message'

export default {
    name: 'askquestions',
    components: {
        TextField,
        Message
    },
    data() {
        return {
            question: ''
        }
    }
}
</script>