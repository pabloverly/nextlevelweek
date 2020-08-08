import styled from 'styled-components';

export const TeacherListContent = styled('div')`
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  .form-teacher-list button{
      width: 10rem;
      height: 5.6rem;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.input};
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.4rem Archivo;
      display: flex;
      align-items:center;
      justify-content:space-evenly;
      transition: 0.2;
      margin-top:2.6rem;
    }

  @media (min-width: 800px){
    width: 60vw;
    margin: 0 auto;
    
    .form-teacher-list{
      flex-direction:row;
      align-items:center;
      justify-content:space-between;
      width: 60vw;
      .input-block{
        margin-top:0;
        flex:0.31;
      }
      .select-block{
        margin-top:0;
        flex:0.31;
      }
      
    }
    .main{
      width: 60vw;
      margin: 0 auto;
      .card-item{
        footer,header{
          padding:3.2rem;
        }

        footer p strong{
          display:inline;
          margin-left: 1.6rem;
        }
        footer button{
          width: 245px;
          font-size: 1.6rem;
          justify-content:center;
          span{
            margin-left: 1.6rem;
          }
        }  
         
    } 
    
  }
 
  }
`;
/* Form, Input, InputBlock, Label */
export const Form = styled('form')`
  margin-top: 3.2rem;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;

`;

export const Main = styled('main')`
margin: 3.2rem auto;
width:80%;
padding-bottom: 3.6rem;
`;
