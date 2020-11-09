<template>
  <v-layout justify-center row wrap>
    <v-banner
        height="8rem"
        max-height="8rem"
        two-line
    >
      Aqui se imprimen los datos
      Que se van sacando con la
      calculadora
      <template v-slot:actions>
        <v-btn
            color="red accent-4"
            icon
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-banner>
  </v-layout>
</template>
