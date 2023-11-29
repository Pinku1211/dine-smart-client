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

// save ordered meal
export const saveOrderedMeal = async (meal, user) =>{
    const axiosSecure = useAxiosSecure();
    const requestedMeal = {
        meal_title: meal?.meal_title,
        email: user?.email,
        user_name: user?.displayName,
        likes: meal?.likes,
        reviews: meal?.reviews?.length,
        status: 'Pending',
    }
    const {data} = await axiosSecure.post(`/requestedMeals`, requestedMeal)

    return data;
}

// get users ordered meals
export const getUserOrderMeal = async email => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.get(`/requestedMeals/${email}`);
    return data
}

// delete req meal
export const deleteReqMeal = async id => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.delete(`/requestedMeals/${id}`)
    return data;
}


// update meal status
export const updateMealStatus = async id => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.put(`/requestedMeals/${id}`)
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
// get user status
export const getStatus = async email => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.get(`/user/${email}`);
    return data.status;
}

// change status
export const changeStatus = async (email, status) => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.put(`/user/${email}`, status);
    return data
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
// ----------
export const getAdminsMeals = async (email) => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.get(`/meals/${email}`)
    return data
}
