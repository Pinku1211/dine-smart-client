import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const useReview = (name) => {
    const axiosSecure = useAxiosSecure()
    const {refetch, data: meals=[]} = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/comments/${name}`)
            return response.data;
        }
    })

    return  [meals, refetch];
};

export default useReview;