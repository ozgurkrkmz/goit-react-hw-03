import { Formik , Form, Field, ErrorMessage  } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
const ContactForm = ({setUsers}) => {
    const FeedbackSchema = Yup.object().shape({
        nameField: Yup.string()
            .min(3, "En az 3 karakter olmalı!")
            .max(50, "En fazla 50 karakter olmalı!")
            .required("Bu alan zorunludur!"),
        numberField: Yup.string()
            .matches(/^[0-9]+$/, "Sadece rakam girebilirsiniz!")
            .min(3, "En az 3 karakter olmalı!")
            .max(50, "En fazla 50 karakter olmalı!")
            .required("Bu alan zorunludur!")
    });
    const initialValues = {
        nameField: "",
        numberField: "",
    };

    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.nameField,
            number: values.numberField,
        };
        let storedData = JSON.parse(localStorage.getItem("contactFormData")) || [];
        storedData.push(newContact);
        localStorage.setItem("contactFormData", JSON.stringify(storedData));

        setUsers(storedData);

        actions.resetForm();
        };
    return(
        <Formik initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
        >
            <Form>
                <div className="container">
                    <div className="row">
                        <label htmlFor={nameFieldId}>Name</label>
                        <Field type="text" name="nameField" id={nameFieldId} />
                        <ErrorMessage name="nameField" component="span" />
                    </div>
                    <div className="row">
                        <label htmlFor={numberFieldId}>Number</label>
                        <Field type="text" name="numberField" id={numberFieldId}/>
                        <ErrorMessage name="numberField" component="span" />
                    </div>
                    <button type="submit" >Submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default ContactForm