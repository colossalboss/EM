<template>
  <div>
    <v-container>
      <v-layout wrap>
        <v-flex sm4>
          <v-card>
              <v-layout justify-center>
                  <!-- <v-flex> -->
                      <img src="https://via.placeholder.com/200" style="width: 100%" alt="">
                  <!-- </v-flex> -->
              </v-layout>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card>
            <v-card-title class="warning">Candidate Info</v-card-title>
            <v-card-text>
              <h5>Name</h5>
              <p>Candidate Name</p>

              <h5>Gender</h5>
              <p>Gender</p>

              <h5>Marital Status</h5>
              <p>Status</p>
              
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-card>
        <v-card-text>
            <h5>Profile Text</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat natus doloremque dolores dolorum officiis maiores consequatur adipisci! Error, facere ratione?</p>
        <h5>Profile Text</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat natus doloremque dolores dolorum officiis maiores consequatur adipisci! Error, facere ratione?</p>
      
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CandidateView",

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>