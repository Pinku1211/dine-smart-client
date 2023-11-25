import { Tab } from '@headlessui/react'
import useMeals from '../../hooks/useMeals';
import Container from '../../components/Shared/Container';
import TabCard from './TabCard';
import Header from '../../components/Shared/Header/Header';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TabSection = () => {
    const [meals] = useMeals();
    console.log(meals)
    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner']


    return (
        <div className='my-16'>
            <Container>
                <Header title='Our Categories'></Header>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-myColor p-1">
                        {Object.keys(categories).map((category, idx) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-myColor shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
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
                                meals?.map(meal => <TabCard key={meal._id} meal={meal}></TabCard>)
                            }
                        </Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                        <Tab.Panel>Content 4</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </Container>
        </div>
    );
};

export default TabSection;