
<script>
import VueCharts from "vue-chartjs";
export default {
  extends: VueCharts.Line,
//   props: ["data", "labels"],

  data() {
    return {
      labels: [],
      value: [],
      leads: [ ],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  methods: {
    getColors() {
      let colors = [
        "green",
        "blue",
        "red",
       
      ];
      return colors;
    },
  },

  mounted() {
    /* eslint no-console: 0 */
    // Overwriting base render method with actual data.
    const year = new Date().getFullYear()
    
      this.renderChart(
        {
          labels: ["Mr A", "Mr B", "Mr C"],
          datasets: [
            {
              label: `${year} Elections`,
              backgroundColor: this.getColors(),
              data: [8, 5, 7,],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
  },
};
</script>

<style scoped>
</style>