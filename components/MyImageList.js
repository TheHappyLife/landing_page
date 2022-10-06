import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function MyImageList({features}) {
  return (
    <ImageList sx={{ width: "100%", backgroundColor: 'white'}}>
      {features.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.description}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}