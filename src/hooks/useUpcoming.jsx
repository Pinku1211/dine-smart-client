
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUpcoming = () => {
    const axiosSecure = useAxiosSecure()
    // use query
    const {refetch, data: upcomingMeal=[]} = useQuery({
        queryKey: ['upcomingMeal'],
        queryFn: async () => {
            const response = await axiosSecure.get('/upcomingMeals')
            return response.data;
        }
    })

    return [upcomingMeal, refetch];
};

export default useUpcoming;