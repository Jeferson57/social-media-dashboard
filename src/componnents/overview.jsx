import data from '../data/data.json'
import { OverviewCard } from './OverviewCard';
import { OverviewTodayCard } from './OverviewCard';

const converNumberToK = (number) => {
    if(number >= 10000) {
        number = number / 1000;
        return `${number}k`;
    }
    return number;
};

export const OverviewContainer = () => {

    return (
        <section className='w-full absolute top-[191px] lef-0 right-0 mx-auto flex flex-wrap gap-8'>
            {
                data.overview.map(object => 
                    <OverviewCard 
                        key={object.id} 
                        user={object.user} 
                        audienceType={object.audienceType}
                        audience={converNumberToK(object.audience)} 
                        network={object.network}
                        isUp={object.isUp}
                        today={object.today}/>
                )
            }
        </section>
    )
}


export const OverviewTodayContainer = () => {
  return (
    <section>
        <h2 className='text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8'>
            Overview Today
        </h2>
        <div className='flex flex-wrap'>
        {
            data['overview-today'].map(object => 
                <OverviewTodayCard 
                    key={object.id}
                    network={object.network}
                    statsType={object.statsType}
                    stats={converNumberToK( object.stats )}
                    porcentage={object.porcentage}
                    isUp={object.isUp} />
            )
        }
        </div>
    </section>
    
  )
}
