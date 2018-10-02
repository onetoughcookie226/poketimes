import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange', 'green', 'blue'];
    //create a random number between 0 and 5

    const randomColor = colours[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow