<template>
    <div class="qrsc">
        <h1>Scan Now</h1>
    <div class="desktop">
        <QrDesktop />
    </div>
    <div class="mobile">
        <QrMobile />
    </div>
    </div>
</template>

<script>
import QrDesktop from './desktop'
import QrMobile from './mobile'
export default {
    name: 'Qrmodule',
    components: {
    QrDesktop,
    QrMobile
    }
}
</script>

<style lang="scss" scoped>
.qrsc {
    position: relative;
}

.mobile {
    display: none;
}

@media all and (max-width: 768px) and (orientation: portrait){
.qrsc {
    position: relative;
}

.desktop {
    display: none;
}

.mobile {
    display: block;
}

}
</style>