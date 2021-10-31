import React, {Component} from 'react';

export default function UserWindow() {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
}

const setDimension = () => {
    getDimension({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    })
}

usEffect(() => {
    window.addEventListener('resize', setDimension);
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
}, [screenSize])

        return(
            <div>
                <ul>
                    <li>Width: <strong>{screenSize.dynamicWidth}</strong></li>
                    <li>Height: <strong>{screenSize.dynamicHeight}</strong></li>
                </ul> 
            </div>
        );


export default UserWindow;