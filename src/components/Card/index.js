import React from 'react';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi'
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Cardd(props) {

  const escutar = () => {
    // console.log("AAAAAAAA: ", )
    const reproduzir = new SpeechSynthesisUtterance();
    reproduzir.lang = "pt-BR"
    reproduzir.pitch = 1.3
    reproduzir.text = props.res
    speechSynthesis.speak(reproduzir);
  }

  const pausar = () => {
    const reprodutor = speechSynthesis
    reprodutor.cancel()
  }

  // console.log("AAOO: ", props.res)
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            OLA
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cardd;