export interface GalaxyData {
  data: {
    title: string,
    nasa_id: string,
    keywords: string[],
    media_type?: 'audio' | 'image' | 'video',
    description: string,
  }[],
  links: {
    href: string,
    rel: string,
    render: string,
  }[]
}

export interface GalaxiesProps {
  galaxies?: GalaxyData[]
}
