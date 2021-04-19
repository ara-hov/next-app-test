import React, {useState, useEffect} from 'react';

const Loader = ({load}) => {
    console.log(load)
    const [active, setActive] = useState(true);
    useEffect(() => {
        if (load) {
            setActive(true)
        } else {
            setTimeout(() => {
                setActive(false)
            },1000)

        }
    }, [load]);
    return (
        <div className={`loader ${active ? 'active' : ''}`}>
            <img src={'/images/double-bouble-loader.gif'} alt="Loader"/>
        </div>
    );
};

export default Loader;
