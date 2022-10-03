import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import useStyles from './styles'

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {

    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia className={classes.image} image={urlToImage || 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} />
                <div>
                    <Typography variant="body2" color='textSecondary' component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color='textSecondary' component="h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant="h5" color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard