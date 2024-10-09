import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Dialog, DialogContent } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 

const Testimonio = ({ imageUrl, altText, title, body }) => {
  const [liked, setLiked] = useState(false); 
  const [open, setOpen] = useState(false); 

  const toggleLike = () => {
    setLiked(!liked); 
  };

  const handleImageClick = () => {
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 300, margin: '20px auto', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardMedia 
        component="img" 
        height="300" 
        image={imageUrl} 
        alt={altText} 
        onClick={handleImageClick} 
        sx={{ cursor: 'pointer', width: '100%', objectFit: 'cover' }} 
      />
      <CardContent>
        <Typography variant="h5" component="h4">
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          component="p" 
          sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            height: 'auto',
          }}
        >
          {body}
        </Typography>
      </CardContent>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src={imageUrl} 
            alt={altText} 
            style={{ maxWidth: '90%', maxHeight: '80vh', cursor: 'pointer' }} 
            onClick={toggleLike}
          />
          <IconButton onClick={toggleLike} sx={{ marginTop: '10px' }}>
          <Typography variant="body2" color="textSecondary">
            Me gusta
          </Typography>
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography variant="body1" component="p" sx={{ marginTop: '10px' }}>
            {body}
          </Typography>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default Testimonio;