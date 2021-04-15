import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleOffSelectOption} // model znika jak uzywamy ESC lub klikniemy obok okienka
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleOffSelectOption}>Okey</button>
    </Modal>
);

export default OptionModal;

