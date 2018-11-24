import React from 'react'
import PropTypes from 'prop-types'
import MaterialCard from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from 'react-router-dom'

import style from './style.module.scss'

const Card = ({
  image, altImage, title, pathName, areaData, ariaLabel,
}) => (
  <Link
    to={{
      pathname: pathName,
      state: areaData,
    }}
    aria-label={ariaLabel.toLowerCase()}
    className={style.link}
  >
    <MaterialCard className={style.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={altImage}
          className={style.media}
          image={image}
          title={altImage}
        />
        <CardContent classes={{ root: style.content }}>
          <h2 className={style.h2}>
            {title}
          </h2>
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  </Link>
)

Card.propTypes = {
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  areaData: PropTypes.object.isRequired,
}

export default Card
