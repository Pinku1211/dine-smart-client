import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useReqMeal = () => {
    const axiosSecure = useAxiosSecure()
    // use query
    const {refetch, data: reqMeals=[]} = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/requestedMeals`)
            return response.data;
        }
    })

    return [reqMeals, refetch];
};

export default useReqMeal;