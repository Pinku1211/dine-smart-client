
import useAuth from '../../../hooks/useAuth';
import Container from '../../Shared/Container';
import avatarImg from '../../../assets/images/anonymous.jpg'
import useAdminMeal from '../../../hooks/useAdminMeal';

const AdminProfile = () => {
    const { user } = useAuth()
    const [adminMeal] = useAdminMeal()
    return (
        <Container>
            <div className='min-h-[80vh] flex justify-center'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-6 '>
                    <div>
                        <img className='h-48 rounded-full' src={user?.photoURL ? user?.photoURL : avatarImg} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Name: {user?.displayName}</h1>
                        <h1 className='text-lg font-semibold'>Email: {user?.email}</h1>
                        <h1 className='text-md font-semibold'>Meals Added: {adminMeal.length}</h1>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AdminProfile;