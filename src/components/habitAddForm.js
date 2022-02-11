import React, { memo, useRef } from 'react';

const HabitAddForm = memo((props) => {
    const formRef = useRef();
    const inputRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder={'present your habit'} />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;
