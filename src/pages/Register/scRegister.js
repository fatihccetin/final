import styled from 'styled-components';

const WrapperRegister = styled.div`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 10px;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body{
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
}

.container{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  .left{
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: grid;
    img{
      height: auto;
      width: 100%;
    }
    @media (max-width:992px) {
      display: none;
    }
  }
  .right{
    background: whitesmoke;
    width: 60%;
    height: 100vh;
    display: flex;
    flex-direction: grid;
    justify-content: center;
    align-items: center;
    .content{
      display: flex;
      flex-direction: column;
      height: 720px;
      width:620px;
      .logoTitle{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
        img{
          height: 74px;
          width: fit-content;
        }
      }
      .form-area{
        background:#fff;
        border-radius: 8px;
          margin: 1rem;
          padding: 70px 90px 110px 90px;
          font-size: 16px;
        form{
          .title{
            text-align: center;
             font: normal normal bold 32px/43px Nunito;
             letter-spacing: 0px;
             color: #525252;
             opacity: 1;
          }
          .form-p{
            text-align: center;
            font: normal normal normal 15px/20px Nunito;
            letter-spacing: 0px;
            color: #525252;
            opacity: 1;
            margin-bottom: 40px;
          }
          .form-group-title{
            width: fit-content;
            margin-bottom:0.5rem;
            text-align: center;
            font: normal normal normal 15px/20px Nunito;
            letter-spacing: 0px;
            color: #525252;
            opacity: 1;
          }
          .form-group{
            font-size: 16px;
            width: 100%;
            input{
              height: 45px;
              width: 100%;
              font-size: 16px;
              margin-bottom: 40px;
              padding-left: 1rem;
              border: 0;
              border-radius: 8px;
              background:whitesmoke;
              &:focus{
                outline:none;
                background: rgba(0, 138, 252, 0.158);
                border: 2px solid rgb(0, 140, 255);
              }
            }
            .form-password{
              text-align: right;
              font: normal normal normal 12px/16px Nunito;
              letter-spacing: 0px;
              color: #B1B1B1;
              opacity: 1;
              transform: translateY(-20px);
            }
            button{
              width: 100%;
              height: 45px;
              font: normal normal bold 18px/24px Nunito;
              background: #4B9CE2 0% 0% no-repeat padding-box;
              border-radius: 8px;
              opacity: 1;
              color: #FFFFFF;
              border-radius: 8px;
              border: 0;
              cursor: pointer;
              transition: all 0.3s;
              &:hover{
                background: rgb(0, 95, 179) 0% 0% no-repeat padding-box;
              }
            }
          }
        }
        .form-bottom{
          margin-top: 15px;
          text-align: center;
          a{
            color: #4B9CE2;
            text-decoration: none;
            font-weight: bold;
            margin-left: 0.5rem;
          }
        }
      }
     
    }
    @media (max-width:992px) {
      width: 100%;
    }
  }
}
`;
export default WrapperRegister;