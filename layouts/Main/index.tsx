import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from '@mui/material';
import { useHistory } from 'react-router';

export default function TitlebarImageList() {
    const history = useHistory();
    const click = ()=>{
       history.push('/video');
        
    }
  return (
    <ImageList sx={{ width: '90%', height: '100%', marginLeft: '220px', marginTop: 10 }}>
      <ImageListItem key="Subheader" cols={2}>
        
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img onClick={()=> {
            if(item.title === '스즈메의 도어락'){
                history.push('/suzume')
            } else {
                history.push('/video');
            }
          }}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: './img/1333.avif',
    title: '김열의칼날',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: './img/11.jpeg',
    title: '스즈메의 도어락',
    author: '@rollelflex_graphy726',
  },
  {
    img: './img/XL.jpeg',
    title: '하울씨의 무빙캐슬',
    author: '@helloimnik',
  },
  {
    img: './img/11.webp',
    title: '눈을 떠보니 내가 하늘섬에 있던 건에 대하여,',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: './img/1.jpeg',
    title: '야채지창',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: './img/12.jpeg',
    title: '지창전골',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];