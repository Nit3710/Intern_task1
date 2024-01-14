import React, { useState, useEffect } from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        // Fetch user data from local storage on component mount
        const storedData = JSON.parse(localStorage.getItem('formData'));
        if (storedData) {
            setUserList([storedData]);
        }
    }, []);

    const handleDelete = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this entry?');
        if (confirmDelete) {
            const updatedUserList = [...userList];
            updatedUserList.splice(index, 1);
            setUserList(updatedUserList);
            // Update local storage
            localStorage.setItem('formData', JSON.stringify(updatedUserList.length > 0 ? updatedUserList[0] : null));
        }
    };

    return (
        <div>
            <h2>User Data Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>University</th>
                        <th>HTML/CSS Proficiency</th>
                        <th>React.js Proficiency</th>
                        <th>WordPress Proficiency</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.university}</td>
                            <td>{user.htmlCssProficiency}</td>
                            <td>{user.reactProficiency}</td>
                            <td>{user.wordpressProficiency}</td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate('/form')} className='btn'>Go to Form Page</button>
            {/* OR use Link component */}
        </div>
    );
};

export default Home;
