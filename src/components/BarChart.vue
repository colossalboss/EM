
<script>
import VueCharts from "vue-chartjs";
export default {
  extends: VueCharts.Bar,
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
        "yellow",
        "brown",
        "purple",
        "black",
        "navy",
        "grey",
        "pink",
        "lightblue",
        "lightgreen",
      ];
      let numOfMonths = this.labels.length;
      return colors.slice(0, numOfMonths);
    },
  },

  mounted() {
    /* eslint no-console: 0 */
    // Overwriting base render method with actual data.
    const year = new Date().getFullYear()
    
      this.renderChart(
        {
          labels: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
          datasets: [
            {
              label: `${year} Presidential Election`,
              backgroundColor: this.getColors(),
              data: [10, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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