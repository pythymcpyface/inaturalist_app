import type { Predictions } from '../../lib/types';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event);
  const {
    species,
    place,
  } = query;
  const process = (data: any): Predictions => {
    return {
      ...data,
      data: data.data.map((el: any) => {
        return {
          ...el,
          df: JSON.parse(el['df']),
        }
      })
    }
  };
  return $fetch(`${config.apiBase}/predictions?place=${place}&species=${species}`)
    .then((data: any) => process(data))
    .catch((err: any) => {
      console.log(err);
      return err;
  })
})