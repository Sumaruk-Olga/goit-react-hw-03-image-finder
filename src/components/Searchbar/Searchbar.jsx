import { Formik} from 'formik';
import PropTypes from 'prop-types';
import { FcSearch } from "react-icons/fc";
import { PageTitle, StyledForm, SearchButton, StyledField } from './SearchBar.styled';

export function Searchbar({onSubmit}) {
    return (<PageTitle>
<Formik
            initialValues={{ search: '' }}
            onSubmit={(values, actions) => {
                onSubmit(values);
                actions.resetForm();
    }}>
    <StyledForm>
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
    </StyledForm>
</Formik>
</PageTitle>)
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    
}

// {/* <header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header> */}