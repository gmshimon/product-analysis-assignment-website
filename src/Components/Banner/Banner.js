import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    let navigate = useNavigate();
    const handleClick = () =>{
        navigate("/ratings");
    }
    return (
        <div className="flex justify-evenly mt-20 items-center">
            <div className="w-1/3">
                <h1 className="text-8xl font-bold">Your Next Phone</h1>
                <h1 className="text-8xl text-purple-500 font-bold">Your Best Phone</h1>
                <p className="text-2xl mt-6">Everyone with a cell phone thinks they're a photographer. Everyone with a laptop thinks they're a journalist. But they have no training, and they have no idea of what we keep to in terms of standards, as in what's far out and what's reality. And they have no dedication to truth.</p>
                <div className="text-center mt-12">
                    <button onClick={handleClick} className="bg-purple-300 border-0
                    p-3 rounded text-purple-1000 text-xl font-bold hover:bg-purple-500">Live Demo</button>
                </div>
            </div>
            <div>
                <img width="900px" src="https://cdn.digitbin.com/wp-content/uploads/Surface-4.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;