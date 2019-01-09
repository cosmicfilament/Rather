import React from 'react';

const NewQuestionInput = ({ label, name, handleInputChanged }) => {
    return (
        <label>
            <input
                type='text'
                name={name}
                onChange={(e) => handleInputChanged(e)}
                placeholder={`${label} -- 35 characters max`} />
        </label>
    );
};

export default NewQuestionInput;
