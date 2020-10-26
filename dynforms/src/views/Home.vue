<template>
  <div class="home">
    <Nav />
    <Welcome />
    <Explain />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/Nav/nav'
import Welcome from '@/components/Home/land'
import Explain from '@/components/Home/demo'

export default {
  name: 'Home',
  components: {
    Nav,
    Welcome,
    Explain
  }
}
</script>
