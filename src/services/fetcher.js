export const fetcher = async (path) => {
  const response = await fetch(`http://localhost:1337/pages?resource=${path.substring(1)}`);

  return response.json();
};
