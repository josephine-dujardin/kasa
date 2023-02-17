import './dropdown.css'
import { useState } from "react";

const Dropdown = (props) => {
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!isOpen);

    return (
        <div className='dropdown'>
            <div className='dropdown-header' onClick={toggleDropdown}>
                {props.title}
                <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                <div className="dropdown-item">
                    {props.text}
                </div>
                <div className="dropdown-list-item">
                    <ul className="ul-list-item">{props.list}</ul>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;
