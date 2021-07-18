import React from 'react';

import { Container } from './styles';

interface Props {
    id: string,
    onClose(): void,
    onSubmit(e: any): void,
    title?: string
}

const Modal: React.FC<Props> = ({ id = 'modal' , title= '',onClose = () => {}, onSubmit = () => {}, children}) =>{
    const handleOutsideClick = (e: any) => {
        if (e.target.id === id) onClose();
    }
    return(
        <Container>
            <div id={id} className="modal" onClick={handleOutsideClick}>
                <div className="container">
                    <div className="header">
                        <p>{title}</p>
                        {/* <button className="close" onClick={onClose} /> */}
                    </div>
                    <div className="content">
                        {children}
                        
                    </div>
                    <div className="actions">
                        <button className="close" onClick={onClose}>cancelar</button>
                        <button className="confirm" onClick={(e) => onSubmit(e)}>Salvar</button>
                    </div>
                </div>
            </div>
       </Container>
    );
}

export default Modal;

