import useAxiosSecure from "./useAxiosSecure"


export const saveUser = async user =>{
    const axiosSecure = useAxiosSecure();
    const currentUser = {
        name: user?.displayName,
        email: user?.email,
        role: 'user',
        status: 'Bronze',
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

// all users
export const getUsers = async () => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.get(`/users`)
    return data
}
// update user
export const makeAdmin = async id => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.put(`/user1/${id}`)
    return data;
}

// add meal
export const addMeal = async meal => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.post('/meals', meal)
    return data;
}

// delete meal
export const deleteMeal = async id => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.delete(`/dashboard/all-meals/meal/${id}`)
}

// update meal
export const updateMeal = async (id, newMeal) => {
    const axiosSecure =useAxiosSecure()
    const {data} = await axiosSecure.put(`/dashboard/all-meals/meal/${id}`, newMeal)
}

