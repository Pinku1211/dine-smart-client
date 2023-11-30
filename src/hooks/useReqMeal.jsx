import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useReqMeal = (search, email) => {
    const axiosSecure = useAxiosSecure()
    // use query
    const {refetch, data: reqMeals=[]} = useQuery({
        queryKey: ['meals', search, email],
        queryFn: async () => {
            if(!search){
                search = ['']
            }
            if(!email){
                email = ['']
            }
            const response = await axiosSecure.get(`/requestedMeals?sort=${search}&searchedEmail=${email}`)
            return response.data;
        }
    })

    return [reqMeals, refetch];
};

export default useReqMeal;