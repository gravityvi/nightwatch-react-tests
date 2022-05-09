import React, { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('what changes need to be done?')

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    setTitle(name);
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper" id='label'>
        <label htmlFor="new-todo-input" className="label__lg">
         {title}
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;