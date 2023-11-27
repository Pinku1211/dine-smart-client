import useAxiosSecure from "./useAxiosSecure"


export const saveUser = async user =>{
    const axiosSecure = useAxiosSecure();
    const currentUser = {
        email: user.email,
        role: 'user',
        status: 'verified',
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)

    return data;
}

// token generate
export const getToken = async email => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.post('/jwt', email)
    console.log("token -----", data)

    return data; 
}

// clear token
export const clearToken = async () => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.get('/logout');
    return data;

}

// get user role
export const getRole = async email => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.get(`/user/${email}`);
    return data.role;
}