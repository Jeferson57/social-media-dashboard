import React from 'react'
import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramkLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'

const netWorkLogos = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramkLogo,
    YouTube: youtubeLogo,
}

const netWorkColors = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram-Gradient',
    YouTube: 'bg-YouTube',
}

export const OverviewCard = ({user, audienceType, audience, network}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center'>
        <div className={`${netWorkColors[network]} h-[4px] mb-8`}></div>
        <div className='flex items-center place-content-center gap-2'>
            <img src={netWorkLogos[network]} alt={`Logo de ${network}`} />
            <p className='text-x text-Dark-Grayish-Blue font-bold'>{user}</p>
        </div>
    
        <p className='text-[56px] font-bold text-Very-Dark-Blue'>{audience}</p>
        <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs'>{audienceType}</p>
    </article>
  )
}
