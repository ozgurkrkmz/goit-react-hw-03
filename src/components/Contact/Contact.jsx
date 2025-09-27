import { FaPhone, FaUser } from 'react-icons/fa';
const Contact = ({name,number,id, onDelete}) => {
    return(
        <li className='list-item'>
            <div>
                <div><FaPhone/>{name}</div>
                <div><FaUser/>{number}</div>
            </div>
            <button onClick={() => onDelete(id)} >Delete</button>
        </li>
    )
}

export default Contact