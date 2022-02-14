import mockedData from './mockedData.json';

export const getEntry = async (resourcePath) => {
  // const response = await fetch(`http://localhost:1337/pages?resource=${resourcePath.substring(1)}`);

  return Promise.resolve(mockedData);
};
