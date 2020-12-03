<template>
  <div class="home">
    <Nav />
    <Welcome />
    <Explain />
    <Subscribes />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/Nav/nav'
import Welcome from '@/components/Home/land'
import Explain from '@/components/Home/demo'
import Subscribes from '@/components/Home/subscribe'

export default {
  name: 'Home',
  components: {
    Nav,
    Welcome,
    Explain,
    Subscribes
  }
}
</script>
