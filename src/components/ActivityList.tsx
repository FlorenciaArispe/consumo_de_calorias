
import { categories } from '../data/categories'
import { Activity } from '../types'

type ActivityListProps = {
    activities: Activity[]
}

export default function ActivityList({activities} : ActivityListProps) {

    const categoryName= (id : number) => {
        const category= categories.find(a => a.id === id)

        return category?.name
    }
    
  return (
    <>
    <h2 className='text-4xl font bold text-white text-center'>Comida y Actividades</h2>

    {activities.map(activity => (
        <div key={activity.id} className='px-5 py-10 bg-white mt-5 flex justify-between'>
            <div className='space-y-2 relative'>
                <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold
                    ${activity.category === 1 ? 'bg-orange-300' : 'bg-orange-600'}`}>
                    {categoryName(activity.category)}
                </p>
                <p className='text-2xl font-bold pt-5'>
                    {activity.name}
                </p>
                <p className='font-black text-4xl text-emerald-950'>
                    {activity.calories} {''}
                    <span>calorias</span>
                </p>
            </div>

            <div>

            </div>
        </div>
    ))}

    </>
  )
}
