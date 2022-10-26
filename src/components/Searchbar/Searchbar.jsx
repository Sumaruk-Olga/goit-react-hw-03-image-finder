import { Formik, Form} from 'formik';
import PropTypes from 'prop-types';
import { FcSearch } from "react-icons/fc";
import { PageTitle, SearchButton, StyledField } from './SearchBar.styled';

export function Searchbar({onSubmit}) {
    return (<PageTitle>
        <Formik
            initialValues={{ search: '' }}
            onSubmit={(values, actions) => {
                onSubmit(values);
                actions.resetForm();
       }}>
    <Form>
        <SearchButton type="submit">
            <FcSearch/>
        </SearchButton>

    <StyledField
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
    />
    </Form>
</Formik>
</PageTitle>)
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    
}