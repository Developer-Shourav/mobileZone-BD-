import React from 'react';

const NotFound = () => {
    return (
        <div className="text-center">
            <div className="container  text-center my-5 ">
                <img className="w-50" src="./404.png" alt="page not found svg" />
            </div>
            <h3 className="text-center text-danger my-2 ">404 Error. This page is not Found</h3>
        </div>
    );
};

export default NotFound;