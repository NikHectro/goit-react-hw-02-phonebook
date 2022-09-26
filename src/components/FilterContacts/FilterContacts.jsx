import Form from 'react-bootstrap/Form';

function FilterContacts({ onChange, value }) {
  return (
    <>
      <Form.Label htmlFor="fltrContacts">
        <h2>Find contact by name:</h2>
      </Form.Label>
      <Form.Control
        type="text"
        id="fltrContacts"
        aria-describedby="passwordHelpBlock"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FilterContacts;
