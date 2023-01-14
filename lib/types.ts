export type Predictions = {
  data: {
    date: Object;
    day: Object;
    days_since_heavy_rain: Object;
    observations: Object;
    'observations_%': Object;
    'observation_%_pred': Object;
    observations_total: Object;
    rain_sum_mm_avg: Object;
    sunshine_duration_s_avg: Object;
    temperature_2m_max_avg: Object;
    temperature_2m_min_avg: Object;
    year: Object;
  };
  place_json: {
    place_id: number;
    place_name: string;
  };
  species_json: {
    species_id: number;
    species_name: string;
  };
};