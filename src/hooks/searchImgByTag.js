export const searchImgByTag = async (keyword) => {
  const accessKey = await import.meta.env.VITE_UNSPLASY_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos/random?query=${keyword}&client_id=${accessKey}`;

  const data = await (await fetch(url)).json();
  const imgUrl = data.urls.full;

  return imgUrl;
};
