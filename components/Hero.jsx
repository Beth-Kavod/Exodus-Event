import React from 'react';
import Image from 'next/image'

import styles from './Hero.module.css'

const Hero = ({ params, children }) => {
  const { heroImage } = params

  return (
    <div className={styles.hero}>
      <Image
        width={1519}
        height={600}
        src={heroImage}
        alt={"text"}
        className={styles.Img}
      />
      { children }
    </div>
  )
}

export default Hero;
