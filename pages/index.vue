<template>
  <div class="flex flex-wrap">
    <UInput v-model="species" type="text" size="sm" placeholder="species" />
    <UInput v-model="place" type="text" size="sm" placeholder="place" />
    <UButton class="ms-1 me-2" @click="search"></UButton>
  </div>
  <div class="h-[402px] w-auto">
    <USkeleton v-if="loading" class="h-[402px] w-auto" />
    <div v-else class="h-[402px] w-auto">
      <highchart
        class="h-[402px] w-auto"
        :options="chartOptions"
        :update="['options.title', 'options.series']"
      />
      {{ autocorrected_place }}
      {{ autocorrected_species }}
    </div>
  </div>
  <div ref="mapContainer">
  </div>
</template>

<script setup>
import mapboxgl from "mapbox-gl";

const mapContainer = ref(null);

onMounted(() => {
  const config = useRuntimeConfig();
  mapboxgl.accessToken = config.public.mapboxAccessToken;
  const map = new mapboxgl.Map({
    container: mapContainer.value,
    // You can add layers to the predetermined slots within the Standard style basemap.
    style: "mapbox://styles/mapbox/standard",
    center: [-74.0060152, 40.7127281],
    zoom: 5,
    maxZoom: 6,
  });

  map.on("style.load", () => {
    map.addSource("urban-areas", {
      type: "geojson",
      data: "https://docs.mapbox.com/mapbox-gl-js/assets/ne_50m_urban_areas.geojson",
    });

    map.addLayer({
      id: "urban-areas-fill",
      type: "fill",
      // This property allows you to identify which `slot` in
      // the Mapbox Standard your new layer should be placed in (`bottom`, `middle`, `top`).
      slot: "middle",
      source: "urban-areas",
      layout: {},
      paint: {
        "fill-color": "#f08",
        "fill-opacity": 0.4,
      },
    });
  });
});
const species = ref("");
const place = ref("");
const autocorrected_place = ref("");
const autocorrected_species = ref("");
const loading = ref(false);
const chartOptions = {
  title: {
    text: "Observations",
    align: "left",
  },

  subtitle: {
    text: "By Andrew Gibson",
    align: "left",
  },

  yAxis: {
    title: {},
  },

  xAxis: {
    title: {
      text: "Date",
    },
    dateTimeLabelFormats: {
      day: "%d %b %Y", //ex- 01 Jan 2016
    },
    type: "datetime",
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },

  series: [],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};
const search = () => {
  loading.value = true;
  $fetch(`/api/predictions?place=${place.value}&species=${species.value}`).then(
    (data) => {
      loading.value = false;
      autocorrected_place.value = data.place_json;
      autocorrected_species.value = data.species_json;
      const soughtKeys = ["observations_%", "observations_%_pred"];
      chartOptions.series = data.data
        // .filter((key) => soughtKeys.includes(key))
        .map((el) => {
          const { correlation, df, year } = el;
          return {
            name: year,
            data: Object.values(df["observations_%"]),
            pointStart: Date.UTC(parseInt(2024, 10), 0, 0),
            pointInterval: 7 * 24 * 3600 * 1000,
          };
        });
    }
  );
};
</script>
