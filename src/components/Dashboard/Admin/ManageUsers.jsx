import toast from "react-hot-toast";
import { makeAdmin } from "../../../hooks/auth";
import useUsers from "../../../hooks/useUsers";
import Header from "../../Shared/Header/Header";


const ManageUsers = () => {
    const [users, refetch] = useUsers()
    console.log(users)
    
    const handleMakeAdmin = async id => {
        console.log(id)
        try{
            await makeAdmin(id)
            refetch()
            toast.success('successfully updated!')
        }catch(error){
            console.log(error)
        }

    }
    return (
        <div className="overflow-x-auto">
            <Header title='All Users'></Header>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       users?.map((user, idx) => <tr key={user._id}>
                       <th>{1 + idx}</th>
                       <td>{`${user.name}`}</td>
                       <td>{`${user.email}`}</td>
                       {
                        user.role === 'admin' ? <td className="text-green-500">Admin</td> : <td><button onClick={() => handleMakeAdmin(user._id)} className="px-6 py-2 bg-slate-100 font-semibold text-myColor hover:scale-110 border-b-4 border-myColor rounded-xl">Make Admin</button></td>
                       }
                       <td>{`${user.status}`}</td>
                   </tr>) 
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;