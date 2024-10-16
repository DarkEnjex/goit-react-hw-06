import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { Formik, Field, Form } from "formik";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleInputChange = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={() => {}}
    >
      {({ handleChange, values }) => (
        <Form className={s.form}>
          <Field
            type="text"
            name="search"
            className={s.input}
            placeholder="Search contacts"
            onChange={(e) => {
              handleChange(e); // Обробка з Formik
              handleInputChange(e.target.value); // Обробка з Redux
            }}
            value={values.search}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
