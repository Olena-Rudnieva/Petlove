import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { FilterWrapper, Form, Wrapper } from './NoticesFilters.styled';
import ReactSelect from 'react-select';

export const NoticesFilters = () => {
  const [category, setCategory] = useState({
    value: 'all',
    label: 'Category',
  });
  const [gender, setGender] = useState({ value: 'all', label: 'By gender' });
  const [type, setType] = useState({ value: 'all', label: 'By type' });

  // const dispatch = useDispatch();
  // const brands = useSelector(selectBrands);
  // const prices = useSelector(selectPrice);

  const reset = () => {
    setCategory({ value: 'all', label: 'Category' });
    setGender({ value: 'all', label: 'By gender' });
    setType({ value: 'all', label: 'By type' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    reset();
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const data = {
  //     brand: brand.value,
  //     price: price.value,
  //     mileage: { min: mileage.min, max: mileage.max },
  //   };
  //   dispatch(addFilter(data));
  // };

  // const handleRemoveFilter = () => {
  //   dispatch(removeFilter());
  //   reset();
  // };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <FilterWrapper>
            <label>
              <ReactSelect
                id="category"
                value={category}
                // options={brands}
                // onChange={setBrand}
                isSearchable
                // styles={stylesBrand}
              />
            </label>
            <label>
              <ReactSelect
                id="gender"
                value={gender}
                // options={brands}
                // onChange={setBrand}
                isSearchable
                // styles={stylesBrand}
              />
            </label>
            <label>
              <ReactSelect
                id="type"
                value={type}
                // options={brands}
                // onChange={setBrand}
                isSearchable
                // styles={stylesBrand}
              />
            </label>
          </FilterWrapper>
        </Form>
      </Wrapper>
    </>
  );
};
