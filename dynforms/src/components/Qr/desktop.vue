<template>
    <div class="scanner">
        <qrcode-drop-zone @decode="onDecode" @init="logErrors">
        <qrcode-stream @decode="onDecode" @init="onInit" />
        </qrcode-drop-zone>

        <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
        <p class="decode-result">Last result: <b>{{ result }}</b></p>
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
.scanner {
    height: 500px;
    width: 500px;
}

@media all and (max-width: 768px) and (orientation: portrait){
.scanner {
  position: relative;
  left: 15%;
  height: 150px;
  width: 250px;
  text-align: left;
}

}
</style>