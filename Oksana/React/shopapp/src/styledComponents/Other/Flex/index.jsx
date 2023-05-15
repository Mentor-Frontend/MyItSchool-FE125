import styled from "styled-components";

const Flex = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-direction: ${  ({fd}) => {
         switch (fd) {
            case 'cl':
                return 'column';
            case 'r':
                return 'row';
            default: return fd;    
         }   
    }

    };

     
 `
 
export default Flex;