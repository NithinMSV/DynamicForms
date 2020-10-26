<template>
  <div>
    <p class="error" v-if="noFrontCamera">You don't seem to have a front camera on your device</p>

    <p class="error" v-if="noRearCamera">You don't seem to have a rear camera on your device</p>

    <!-- <p>Camera used: {{camera}}</p>
    <qrcode-stream :camera="camera" @init="onInit">
      <button @click="switchCamera">switch camera</button>
    </qrcode-stream> -->
    <div class="mobile-scanner">
    <p class="decode-result">Last result: <b>{{ result }}</b></p>

        <qrcode-drop-zone @decode="onDecode" @init="logErrors">
        <qrcode-stream @decode="onDecode" @init="onInit" />
        </qrcode-drop-zone>

        <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
    </div>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";

export default {
    name: 'QrMobile',
    components: { QrcodeStream, QrcodeDropZone, QrcodeCapture },

  data() {
    return {
      camera: "rear",
      noStreamApiSupport: false,
      noRearCamera: false,
      noFrontCamera: false
    };
  },

  methods: {
    onDecode (result) {
      this.result = result
    },

    logErrors (promise) {
      promise.catch(console.error)
    },

    // switchCamera() {
    //   switch (this.camera) {
    //     case "front":
    //       this.camera = "rear";
    //       break;
    //     case "rear":
    //       this.camera = "front";
    //       break;
    //     default:
    //       //nothing
    //       break;
    //   }
    // },

    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        const triedFrontCamera = this.camera === "front";
        const triedRearCamera = this.camera === "rear";

        const cameraMissingError = error.name === "OverconstrainedError";

        if (triedRearCamera && cameraMissingError) {
          this.noRearCamera = true;
        }

        if (triedFrontCamera && cameraMissingError) {
          this.noFrontCamera = true;
        }

        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true
        }

         if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
button {
  position: absolute;
  left: 10px;
  top: 10px;
}

.error {
  color: red;
  font-weight: bold;
}

.mobile-scanner {
  height: 100px;
  width: 100px;
}
</style>