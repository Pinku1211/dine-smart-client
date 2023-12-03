
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useMeals = (price, searchText, category) => {
    const axiosSecure = useAxiosSecure()
    // use query
    const {refetch, data: meals=[]} = useQuery({
        queryKey: ['meals', price, searchText, category],
        queryFn: async () => {
            if(!price){
                price = [0, 500]
            }
            if(!searchText){
                searchText = ['']
            }
            if(!category){
                category = ['']
            }
            // if(!ascLike){
            //     ascLike = false;
            // }
            // if(!ascRev){
            //     ascRev = false;
            // }

            const response = await axiosSecure.get(`/meals?priceSort=${price}&search=${searchText}&category=${category}`)
            return response.data;
        }
    })

    return [meals, refetch];
};

export default useMeals;

