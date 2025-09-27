import { Field, Form, Formik } from "formik"
import { nanoid } from "nanoid"
const SearchBox = ({setSearch}) => {

    const searchFieldId = nanoid();
    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    return(
        <Formik > 
            <Form>
                <div className="container">
                    <div className="row">
                        <label htmlFor={searchFieldId}>Find contacts by name</label>
                    <Field type="text" name="searchField" id={searchFieldId} onChange={handleChange}/>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default SearchBox