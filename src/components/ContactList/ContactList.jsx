import Contact  from "../Contact/Contact"
const ContactList = ({users, setUsers}) => {

    const handleDelete = (id) => {
        console.log("çalıştı");
        const updateUsers = users.filter((user) => user.id !== id);
        setUsers(updateUsers);
        localStorage.setItem("contactFormData", JSON.stringify(updateUsers));
    }
    return(
        <ul className="list">
            {users.length === 0 ? (
                <li>Rehberde kimse yok</li>
            ) : (
                users.map((user) => (
                <Contact
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    number={user.number}
                    onDelete={handleDelete}
                />
                ))
            )}
            </ul>
    )
}

export default ContactList