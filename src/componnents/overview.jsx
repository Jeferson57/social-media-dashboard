import data from '../data/data.json'
import { OverviewCard } from './OverviewCard';

export const OverviewContainer = () => {
    return (
        <section className='w-full absolute top-[191px] lef-0 right-0 mx-auto'>
            {
                data.overview.map(object => 
                    <OverviewCard 
                        key={object.id} 
                        user={object.user} 
                        audienceType={object.audienceType}
                        audience={object.audience} 
                        network={object.network}
                        isUp={object.isUp}
                        today={object.today}/>
                )
            }
        </section>
    )
}