export const fetcher = async (url: string, options?: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SMART_FRIDGE_API_URL}${url}`, {
    ...options,
  });
  const data = await res.json();
  return data;
};
