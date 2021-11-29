// use material design cards for review
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="movieReview">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="RushHour3"
        subheader="September 14, 2003"
      />
      <CardMedia
        component="img"
        height="194"
        image="../images/rushhour3.jpg"
        alt="Rush Hour 3"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        No matter how fast Chris Tucker shoots his mouth or Jackie Chan flashes his fists, 
        they can't recapture the charm of the original Rush Hour in this third installment.

        Tim Grierson, Screen International, July 23 2008 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Rating 2</Typography>
          <Typography paragraph>
            Like Lethal Weapon, this franchise has become lazier and less thrilling with each instalment. 
            Hopefully, unlike Lethal Weapon, they'll stop at Part Three.

            Nick De Semlyen, Empire Magazine, August 17 2007
          </Typography>
          <Typography paragraph>
            There's a bizarre lack of anything to care about beyond the dynamic duo at the center of the film. 
            Chan and Tucker can only carry an audience so far.

            Brian Tallerico, UGO, August 13 2007
          </Typography>
          <Typography paragraph>
          This movie makes a fine replacement for the previous two installments.

          Wesley Morris, Boston Globe, August 11 2007 
          </Typography>
          <Typography>
          Remarkably redundant yet still highly entertaining.

          Mike Massie, Gone with the Twins, November 27 2020 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}