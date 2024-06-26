import React from 'react'
import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramkLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'
import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'
import { data } from 'autoprefixer'

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

export const OverviewCard = ({user, audienceType, audience, network, isUp, today}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125'>
        <div className={`${netWorkColors[network]} h-[4px] mb-8`}></div>
        <div className='flex items-center place-content-center gap-2'>
            <img src={netWorkLogos[network]} alt={`Logo de ${network}`} />
            <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
        </div>
    
        <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-White'>{audience}</p>
        <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6'>{audienceType}</p>
        <div className='flex items-center place-content-center gap-1 '>
          <img src={isUp ? iconUp : iconDown} alt="Icon arrow" />
          <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{today} Today</p>
        </div>
    </article>
  )
}


export const OverviewTodayCard = ({network, statsType, stats, porcentage, isUp}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer dark:bg-Dark-Desaturated-Blue hover:brightness-95 hover:dark:brightness-125'>
      <div className='flex items-center justify-between'>
        <p className='text-Dark-Grayish-Blue'>{statsType}</p>
        <img src={netWorkLogos[network]} alt=''/>
      </div>
      <div className='flex justify-between'>
        <p className='text-[42px] font-bold text-Very-Dark-Blue dark:text-White'>{stats}</p>
        <div className='flex items-center place-content-center gap-1'>
          <img src={isUp ? iconUp : iconDown} alt="Icon arrow" />
          <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{porcentage} Today</p>
        </div>
        
      </div>
    </article>
  )
}
