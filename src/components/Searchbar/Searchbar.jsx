import { Formik, Form,  Field} from 'formik';
import PropTypes from 'prop-types';

export function Searchbar({onSubmit}) {
    return (<header>
        <Formik
            initialValues={{ search: '' }}
            onSubmit={(values, actions) => {
                onSubmit(values);
                actions.resetForm();
       }}>
    <Form>
        <button type="submit">
            <span>Search</span>
        </button>

    <Field
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
    />
    </Form>
</Formik>
</header>)
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    
}