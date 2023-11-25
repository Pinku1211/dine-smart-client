import useAxiosSecure from "./useAxiosSecure"


export const saveUser = async user =>{
    const axiosSecure = useAxiosSecure();
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'verified',
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)

    return data;
}


export const getToken = async email => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.post('/jwt', email)
    console.log("token -----", data)

    return data; 
}