<template lang="pug">
v-app
  v-app-bar.primary(app dark)
    v-img.mr-2( 
      max-width="38"
      src="/logo.svg"
    )
    div.pt-1.text-h5.font-weight-bold Site Name
    v-spacer
    v-btn( 
      v-if="$route.path=='/profile'"
      to="/" fab small color="info"
    )
      v-icon(
        style="margin-top: 2px"
      ) mdi-location-exit
      
  v-main.secondary
    v-container
      nuxt

</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>
