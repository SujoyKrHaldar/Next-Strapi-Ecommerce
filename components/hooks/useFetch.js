export const useFetch = async (url) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_API_URL + url, {
    headers: {
      Authorization:
        "bearer " + process.env.NEXT_PUBLIC_STRAPI_CUSTOM_API_TOKEN,
    },
  });

  const { data, meta } = await res.json();
  return { data, meta };
};
