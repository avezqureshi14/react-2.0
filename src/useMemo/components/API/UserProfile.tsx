import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

// Simple in-memory cache
const userCache: Record<number, any> = {};

const UserProfile: React.FC = () => {
    const [userId, setUserId] = useState<number>(1);
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    console.log('Current Cache:', userCache);

    useEffect(() => {
        const fetchUserData = async () => {
            if (userCache[userId]) {
                console.log(`Data found in cache for userId ${userId}`);
                setUserData(userCache[userId]);
                return;
            }

            setLoading(true);
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
                console.log(`API response for userId ${userId}:`, response.data);
                if (response.status === 200) {
                    userCache[userId] = response.data; // Store in cache
                    setUserData(response.data);
                } else {
                    console.error(`Error fetching user data for userId ${userId}:`, response.status);
                }
            } catch (error) {
                console.error(`Error fetching user data for userId ${userId}:`, error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    // Memoize userData to avoid unnecessary re-renders
    const memoizedUserData = useMemo(() => userData, [userData]);

    const handleUserIdChange = (newId: number) => {
        setUserId(newId);
    };

    return (
        <div>
            <h1>User Profile</h1>
            <label>Enter User ID:</label>
            <input
                type="number"
                value={userId}
                onChange={(e) => handleUserIdChange(parseInt(e.target.value))}
            />
            {loading ? (
                <p>Loading...</p>
            ) : memoizedUserData ? (
                <div>
                    <h2>{memoizedUserData.name}</h2>
                    <p>Email: {memoizedUserData.email}</p>
                    <p>Phone: {memoizedUserData.phone}</p>
                    <p>Website: {memoizedUserData.website}</p>
                </div>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default UserProfile;
