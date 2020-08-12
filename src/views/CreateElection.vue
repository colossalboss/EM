<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex sm4>
          <v-card>
            <v-card-title class="warning white--text">Create Election</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Election Name"></v-text-field>
                <v-text-field label="Election Date"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn small class="text-capitalize warning">Create</v-btn>
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