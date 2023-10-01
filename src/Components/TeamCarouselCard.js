import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function TeamCarouselCard({ image, title, description, badgeContent }) {
  return (
    <Card>
      <Badge badgeContent={badgeContent} color="secondary">
        <CardMedia>
          <Avatar alt={title} src={image} sx={{ width: 80, height: 80 }} />
        </CardMedia>
      </Badge>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TeamCarouselCard;
