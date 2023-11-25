import useAxiosPublic from "./useAxiosPublic"

export const getMeal = async (id) => {
    const axiosPublic = useAxiosPublic()
    const {data} = await axiosPublic.get(`/meals/${id}`)
    return(data)
}