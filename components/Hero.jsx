import React from 'react';
import Image from 'next/image'

import styles from './Hero.module.css'

const Hero = ({ params, children }) => {
  const { heroImage } = params

  return (
    <div className={styles.hero}>
      <Image
        width={1519}
        height={875}
        src={heroImage}
        alt={"Hero Image"}
        className={styles.Img}
      />
      { children }
    </div>
  )
}

export default Hero;
