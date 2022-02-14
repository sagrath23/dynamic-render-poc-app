import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
// page blocks
import { Hero } from '../Hero';
import { Content } from '../Content';
import { Footer } from '../Footer'
// fetch function
import { fetcher } from '../../services';

const renderTypes = {
  "blocks.hero": Hero,
  "blocks.content": Content,
  "blocks.footer": Footer,
};

export const RouteMatcher = () => {
  // get location from URL
  const { pathname } = useLocation();
  // send it to strapi in order to get the content
  const { data, error } = useSWR(pathname, fetcher);
  // if I get an error or not data, just redirect to home :)

  console.log(data, error, 'da data');
  if (!data) return "Loading...";
  return (
    <div>
      {data[0].blocks.map((block) => {
        const RenderBlock = renderTypes[block['__component']];

        return (
          <RenderBlock {...block} />
        );
      })}
    </div>
  );
};
