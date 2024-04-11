import data from '../data/data.json'
import { OverviewCard } from './OverviewCard';

export const OverviewContainer = () => {

    const converNumberToK = (number) => {
        if(number >= 10000) {
            number = number / 1000;
            return `${number}k`;
        }
        return number;
    };

    return (
        <section className='w-full absolute top-[191px] lef-0 right-0 mx-auto'>
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