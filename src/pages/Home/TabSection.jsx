import { Tab } from '@headlessui/react'
import useMeals from '../../hooks/useMeals';
import Container from '../../components/Shared/Container';
import TabCard from './TabCard';
import Header from '../../components/Shared/Header/Header';
import { Link } from 'react-router-dom';
import { split } from 'postcss/lib/list';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TabSection = () => {
    const [meals] = useMeals();
    console.log(meals)
    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

    const breakFast = meals?.filter(meal => meal.meal_type === 'Breakfast');
    const lunch = meals?.filter(meal => meal.meal_type === 'Lunch');
    const dinner = meals?.filter(meal => meal.meal_type === 'Dinner');


    return (
        <div className='py-16 bg-base-200'>
            <Container>
                <Header title='Our Categories'></Header>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-gradient-to-r from-slate-200 to-base-300  p-1 w-1/2 mx-auto">
                        {Object.keys(categories).map((category, idx) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-myColor focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-myColor shadow'
                                            : ' hover:bg-white/[0.12]'
                                    )
                                }
                            >
                                {categories[idx]}

                            </Tab>
                        ))}

                    </Tab.List>
                    <Tab.Panels className='my-10'>
                        <Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                meals?.slice(0,6).map(meal => <TabCard key={meal._id} meal={meal}></TabCard>)
                            }
                        </Tab.Panel>
                        <Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                breakFast?.map(meal => <TabCard key={meal._id} meal={meal}></TabCard>)
                            }
                        </Tab.Panel>
                        <Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                lunch?.map(meal => <TabCard key={meal._id} meal={meal}></TabCard>)
                            }
                        </Tab.Panel>
                        <Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                dinner?.map(meal => <TabCard key={meal._id} meal={meal}></TabCard>)
                            }
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                <div className='flex justify-center'>
                    <Link to='/meals'><button className="px-6 py-2 bg-slate-100 font-semibold text-myColor border-b-4 border-myColor rounded-xl">See All</button></Link>
                </div>
            </Container>
        </div>
    );
};

export default TabSection;