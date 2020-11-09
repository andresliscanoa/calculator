<template>
  <v-app>
    <v-app-bar
        app
        color="purple darken-3"
        dark
    >
      <span class="text-h5">Calculator</span>
      <v-spacer></v-spacer>
      <v-btn
          href="https://github.com/andresliscanoa/calculator"
          target="_blank"
          text
      >
        <span class="mr-2">andresliscanoa</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <calculator/>
      </v-container>
    </v-main>
    <v-footer absolute app>
      <v-spacer/>
      <span class="text-button"><strong>andresliscanoa</strong></span>
    </v-footer>
  </v-app>
</template>

<script>
import Calculator from '@/components/Calculator'

export default {
  name      : 'App',
  components: {
    Calculator
  },
  data      : () => ({
    //
  })
}
</script>
<style>
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: purple;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: mediumpurple;
}
</style>
