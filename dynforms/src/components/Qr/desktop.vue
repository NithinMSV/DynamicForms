<template>
    <div class="desktop-scanner">
        <p class="decode-result">Last result: <b>{{ result }}</b></p>

        <qrcode-drop-zone @decode="onDecode" @init="logErrors">
        <qrcode-stream @decode="onDecode" @init="onInit" />
        </qrcode-drop-zone>

        <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
    </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
    name: 'QrDesktop',
    components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  data () {
    return {
      result: '',
      noStreamApiSupport: false
    }
  },

  methods: {
    onDecode (result) {
      this.result = result
    },

    logErrors (promise) {
      promise.catch(console.error)
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.desktop-scanner {
    height: 500px;
    width: 500px;
}
</style>