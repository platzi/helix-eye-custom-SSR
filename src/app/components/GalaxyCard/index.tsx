import React from 'react';
import { GalaxyData } from '../GalaxiesLayout/types'
import { faImage, faVolumeUp, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GalaxyCardContainer } from './styles';

interface GalaxyCardProps {
  galaxy: GalaxyData,
}

export const GalaxyCard = ({ galaxy }: GalaxyCardProps) => {
  const galaxyData = galaxy.data[0]
  const galaxyImage = galaxy.links?.length ? galaxy.links[0].href : 'https://i.imgur.com/GHqELEK.jpeg'

  const renderMediaTypeIcon = (mediaType: string) => {
    const mediaIcon = {
      'image': faImage,
      'video': faVideo,
      'audio': faVolumeUp
    }

    const mediaTranslation = {
      'image': 'Imagen',
      'video': 'Video',
      'audio': 'Audio'
    }

    const icon = mediaIcon[mediaType]

    if (icon) {
      return (
        <div className='icon'>
          <FontAwesomeIcon icon={icon} /> <span>{mediaTranslation[mediaType]}</span>
        </div>
      )
    }
  }

  return (
    <GalaxyCardContainer>
      <h3 className='title'>{galaxyData.title}</h3>
      <img src={galaxyImage} alt={galaxyData.title} />
      <div className="info-container">
        {renderMediaTypeIcon(galaxyData.media_type ?? '')}
        <div className='keyword-container'>
          {galaxyData.keywords?.map((keyword, i) => <span className='keyword' key={i}>{keyword}</span>)}
        </div>
        <p className='description'>{galaxyData.description}</p>
      </div>
    </GalaxyCardContainer>
  )
}