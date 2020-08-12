<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex sm6>
          <v-card>
            <v-card-title class="warning white--text">Add Position</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Position Name"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn small class="text-capitalize warning">Add</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CreateElection",
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
</style>