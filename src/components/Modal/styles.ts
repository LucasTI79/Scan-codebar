import styled from 'styled-components';

export const Container = styled.div`
    .modal{
        width: 100%;
        height:100vh;
        position: fixed;
        top:0;
        left:0;
        z-index:10;
        background-color: rgba(0,0,0,0.4);
        display:flex;
        justify-content: center;
        align-items: center;

        &:after {
            background-color: #000;
        }

        .container{
            background-color: white;
            border-radius: 5px 5px 0 0;
            width:auto;
            max-height: 60vh;
            flex-direction: column;

            .header {
                display: flex;
                justify-content: space-between;
                height:30px;
                align-items: center;

                p {
                   padding: 24px 20px 0 20px;
                   text-transform: capitalize;
                }

                .close{
                    padding-right: 24px;
                    background-color: transparent;
                    border:none;
                    outline:none;
                    width: 35px;
                    cursor:pointer;
                    &:before,
                    &:after{
                        content:' ';
                        position: absolute;
                        width: 2.5px;
                        height:24px;
                        background-color: #000;
                    }
                    &:before{
                        transform: rotate(45deg);
                    }
                    &:after{
                        transform: rotate(-45deg);
                    }
                }
            }

            .content {
                margin: 20px 15px 0 15px;
                display: flex;
                flex-direction: column;
            }  
            
            .actions {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                background-color: #fff;
                padding-top: 10px;
                border-radius: 0 0 5px 5px;
                
                button {
                    padding: 0.75rem 0.75rem;
                    margin: 0 15px 10px 5px;
                    cursor: pointer;
                    text-transform: uppercase;
                    background-color: transparent;
                    border-radius: 5px;
                    border-color: transparent;
                    font-weight: bold;
                }

                .close {
                    color: rgb(244,67,54); 
                }

                .confirm {
                    background-color: #50ae54;
                    color: white;
                }
            }
        }
    }
`

