<template>
  <div class="Chat">
      <Client></Client>
  </div>
</template>

<script>
// @ is an alias to /src
import Client from '@/components/Client.vue'

export default {
  name: 'Chat',
  components: {
    Client
  }
}
</script>
