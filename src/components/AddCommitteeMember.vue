<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          small
          class="text-capitalize warning"
        >
          Add Member
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Add Committee Member</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field label="Member Name"></v-text-field>
                <v-text-field label="Member Post"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Save</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>