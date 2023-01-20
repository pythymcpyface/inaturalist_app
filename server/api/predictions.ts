import type { Predictions } from '../../lib/types';

export default defineEventHandler(async (event) => {
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
  return $fetch(`http://localhost:8080/predictions?place=${place}&species=${species}`)
    .then((data: any) => process(data))
    .catch((err: any) => {
      console.log(err);
      return err;
  })
})