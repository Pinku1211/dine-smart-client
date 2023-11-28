import useUsers from "../../../hooks/useUsers";


const ManageUsers = () => {
    const users = useUsers()
    console.log(users[0])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       users[0]?.map((user, idx) => <tr key={user._id}>
                       <th>{1 + idx}</th>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td><button className="px-6 py-2 bg-slate-100 font-semibold text-myColor hover:scale-110 border-b-4 border-myColor rounded-xl">Make Admin</button></td>
                       <td>{user.status}</td>
                   </tr>) 
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;