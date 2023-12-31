import useAxiosSecure from "./useAxiosSecure"


export const saveUser = async user =>{
    const axiosSecure = useAxiosSecure();
   
    const currentUser = {
        name: user?.displayName,
        email: user?.email,
        role: 'user',
        status: 'Bronze',
        likedMeals : []
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
    console.log("token", data)

    return data; 
}

// clear token
export const clearToken = async () => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.get('/logout');
    return data;

}

// get user role----------------------------
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
// push like and meals name into the users collection
export const addLikedMeal = async (email, mealTitle) => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.put(`/addLike/${email}`, mealTitle)
    return data;
}
export const addLike = async id => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.put(`/increase/${id}`)
    return data;
}


// add meal-----------------------------------
export const addMeal = async meal => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.post('/meals', meal)
    return data;
}
// insert comment into the existing meal
export const addComment = async (id, newComment) => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.put(`/addComment/${id}`, newComment)
    return data;
}
//  delete a comment
export const deleteComment = async (name, comment) => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.delete(`/comments/${name}/${comment}`)
}
// update a comment
export const updateComment = async (name, comment, newComment) => {
    const axiosSecure = useAxiosSecure()
    console.log(newComment)
    const {data} = await axiosSecure.put(`/comments/${name}/${comment}`, newComment)
}

// add to upcoming
export const addMealToUpcoming = async meal => {
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.post('/upcomingMeals', meal)
    return data;
}
//  get an upcoming meal
export const getAnUpcomingMeal = async id => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.get(`/upcomingMeals/${id}`)
    return data;
}
// delete an upcoming meal
export const deleteUpcomingMeal = async id => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.delete(`/upcomingMeals/${id}`)
}
// get like
export const getLike = async id => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.put(`/upcomingMeals/${id}`)
    return data;
}
// get dislike
export const getDislike = async id => {
    const axiosSecure = useAxiosSecure()
    const {data} = await axiosSecure.put(`/upcomingMeal/${id}`)
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
