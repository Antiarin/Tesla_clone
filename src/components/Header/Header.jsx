import React, { useState } from "react";
import styled, { css } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { BURGERNAV_ITEMS, PRODUCTS } from "../../Helpers/Products";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import Logo from "../../images/teslalogo.png";


const RightMenu_before_login = ({ setValue, font_color }) => {
  return (
    <RightMenu text_color={font_color}>
      <ul>
        {PRODUCTS.map(
          (data, index) =>
            data.id > 6 && (
              <li key={index} className={data.classname}><StyledLink1 to={data.link}>{data.name}</StyledLink1></li>))}
        <li className="menu" onClick={() => setValue(true)}>Menu</li>
        <hr className="hr" />
      </ul>
    </RightMenu>
  );
};
const RightMenu_after_login = ({ setValue, onClick, font_color }) => {
  return (
    <RightMenu_2 text_color={font_color}>
      <ul>
        {PRODUCTS.map((data, index) =>data.id > 6 && (<li key={index} className={data.classname}><StyledLink1 to={data.link}>{data.name}</StyledLink1></li>))}
        <li className="logout" onClick={onClick}>Logout</li>
        <li className="menu" onClick={() => setValue(true)}>Menu</li>
        <hr className="hr" />
      </ul>
    </RightMenu_2>
  );
};

function Header({ fontcolor }) {
  const user = useSelector(selectUser);
  const [burgerStatus, setBurgerStatus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutofApp = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        navigate("/");
        //sign-out successful.
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });
  };
  return (
    <Container textcolor={fontcolor}>
      <StyledLink to="/" textcolor={fontcolor}>
        <img src={Logo} alt="" />{/* image src in html differs from css: css uses url whereas html uses src*/}
      </StyledLink>
      <Menu textcolor={fontcolor}>
        <ul>
          {PRODUCTS.map(
            (e) =>
              e.id <= 6 && (
                <li key={e.id} className={e.classname}>
                  <StyledLink1 to={e.link}>{e.name}</StyledLink1>
                </li>
              )
          )}
          <hr />
        </ul>
      </Menu>
      {user ? (
        <RightMenu_after_login
          font_color={fontcolor}
          setValue={setBurgerStatus}
          onClick={logoutofApp}
        />
      ) : (
        <RightMenu_before_login
          font_color={fontcolor}
          setValue={setBurgerStatus}
        />
      )}
      <BurgerNav open={burgerStatus} textcolor={fontcolor}>
        <CloseWrapper>
          {/* Closing it in a different div to shift it to the right b y using display flex, if you wanna align something wrap it*/}
          <CustomClose
            onClick={() => setBurgerStatus(false)}
            textcolor={fontcolor}
          />
        </CloseWrapper>
        {BURGERNAV_ITEMS.map((data, index) => (
          <li key={index}>
            <Styled2Link to={data.link}>{data.name}</Styled2Link>
          </li>
        ))}
      </BurgerNav>
    </Container>
  );
}
export default Header;
const Container = styled.div`
  width: 100vw;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => `${props.textcolor}`};
  padding: 0 1vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; // z-index is added here cause it competes with the container division of header which is fixed.
`;
const StyledLink = styled(Link)`
  display: flex;
  align-itmes: center;
  color: inherit;
  justify-content: center;
  img {
    height: 12px;
  }
  ${(props) =>
    props.textcolor === "white" &&
    css`
      img {
        filter: brightness(0) invert(1);
        height: 12px;
      }
    `};
`;

const Menu = styled.div`
  display: flex;
  width: 55vw;
  justify-content: center;
  align-items: center;
  color: inherit;
  //  height:100%
  padding-bottom: 20px;
  ul {
    width: 100%;
    height: 100%;
    color: inherit;
    border-radius: 10px;;
  }
  li {
    list-style: none;
    margin: 0;
    margin-bottom: 25px;
    width: 16%;
    display: inline-flex;
    text-align: center;
    cursor: pointer;
    color: inherit;
    flex-wrap: nowrap;
    border-radius: 10px;
  }
  hr {
    height: 30px;
    width: 16%;
    margin: -50px 0;
    border: none;
    transition: 0.3s ease-in-out;
  }
  .one:hover ~ hr {
    box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
    border: none;
    border-radius: 10px;
  }
  .two:hover ~ hr {
    box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
    border: none;
    border-radius: 10px;
    margin-left: 16%;
  }
  .three:hover ~ hr {
    box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
    border: none;
    border-radius: 10px;
    margin-left: 32%;
  }
  .four:hover ~ hr {
    box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
    border: none;
    border-radius: 10px;
    margin-left: 48%;
  }
  .five:hover ~ hr {
    box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
    border: none;
    border-radius: 10px;
    margin-left: 64%;
    // @media(max-width:1418px){
    //     height:45px;

    // }
  }
  .six:hover ~ hr {
    box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
    border: none;
    border-radius: 10px;
    margin-left: 80%;
    // @media(max-width:1418px){
    //     height:45px;

    // }
  }
  ${(props) =>
    props.textcolor === "white" &&
    css`
      .one:hover ~ hr {
        box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
        border: none;
        border-radius: 10px;
      }
      .two:hover ~ hr {
        box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
        border: none;
        border-radius: 10px;
        margin-left: 16%;
      }
      .three:hover ~ hr {
        box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
        border: none;
        border-radius: 10px;
        margin-left: 32%;
      }
      .four:hover ~ hr {
        box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
        border: none;
        border-radius: 10px;
        margin-left: 48%;
      }
      .five:hover ~ hr {
        box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
        border: none;
        border-radius: 10px;
        margin-left: 64%;
        // @media(max-width:1418px){
        //     height:45px;

        // }
      }
      .six:hover ~ hr {
        box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
        border: none;
        border-radius: 10px;
        margin-left: 80%;
        // @media(max-width:1418px){
        //     height:45px;

        // }
      }
    `};

  @media (max-width: 1161px) {
    display: none;
  }
`;
const StyledLink1 = styled(Link)`
  display: inline-block;
  font-weight: 545;
  font-size: 16px;
  color: inherit;
  text-align: center;
  text-transform: none;
  letter-spacing: 0.5px;
  padding: 0, 10px;
  margin-top: 0;
  flex-wrap: nowrap;
  width: 100%;
`;
const RightMenu = styled.div`
     display:flex;
     align-items:center;
     flex-wrap:nowrap;
     color:inherit;
     width:200px;
     margin-right:10px;
     justify-content:center;
     height:100%
     min-height:60px;
     padding-bottom:20px;
     border-radius: 10px;
    ul{
         width:100%;
         height:100%; 
         color:inherit;
         border-radius: 10px;
     li{
        list-style:none;
        margin:0;
        margin-bottom:25px;
        width:33%;
        display:inline-flex;         
        text-align:center;
        justify-content: center;
        align-items: center;
         cursor:pointer;
         font-weight:545;
         color:inherit;
         text-transform:none;
         letter-spacing:.5px;
         flex-wrap:nowrap; 
         border-radius: 10px; 
     }
     .seven, .menu{
      width:29%;
      }
      .eight{
        width:42%;
      }
     .hr{
            height:30px;
            margin:-50px 0;
             border:none;        
            transition:.3s ease-in-out;
        }
       .seven:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.17) inset;
          border:none;
          border-radius:10px;
          width:29%;
           
       }
       .eight:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.17) inset;
          border:none;
          border-radius:10px;
           margin-left:29%;
           width:42%;
       }
       .menu:hover~.hr{
          box-shadow: 5px 10px 50px hsla(0,0%,50.2%,0.17) inset;
          border:none;
          border-radius:10px;
          margin-left:71%;
          width:29%;
        }

    

    ${(props) =>
      props.text_color === "white" &&
      css`
        .seven:hover ~ .hr {
          box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
          border: none;
          border-radius: 10px;
          width: 29%;
        }
        .eight:hover ~ .hr {
          box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
          border: none;
          border-radius: 10px;
          margin-left: 29%;
          width: 42%;
        }
        .menu:hover ~ .hr {
          box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
          border: none;
          border-radius: 10px;
          margin-left: 71%;
          width: 29%;
        }
      `};


  
   
@media(max-width:1161px){
    justify-content:flex-end;

}
}
`;
const RightMenu_2 = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 300px;
  margin-right: 10px;
  color: inherit;
  justify-content: center;
  padding-bottom: 20px;
  border-radius: 10px;
  ul {
    width: 100%;
    height: 100%;
    color: inherit;
    border-radius: 10px;
    li {
      list-style: none;
      margin: 0;
      margin-bottom: 25px;
      display: inline-flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-weight: 545;
      border-radius: 10px;
      text-transform: none;
      letter-spacing: 0.5px;
      color: inherit;
      cursor: pointer;
      flex-wrap: nowrap;
    }
    .seven,
    .menu {
      width: 21%;
    }
    .eight,
    .logout {
      width: 29%;
    }
    .hr {
      height: 30px;
      margin: -50px 0;
      border: none;
      transition: 0.3s ease-in-out;
    }
    .seven:hover ~ .hr {
      box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
      border: none;
      border-radius: 10px;
      width: 21%;
    }
    .eight:hover ~ .hr {
      box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
      border: none;
      border-radius: 10px;
      margin-left: 21%;
      width: 29%;
    }
    .logout:hover ~ .hr {
      box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
      border: none;
      border-radius: 10px;
      margin-left: 50%;
      width: 29%;
    }
    .menu:hover ~ .hr {
      box-shadow: 5px 10px 50px hsla(0, 0%, 50.2%, 0.17) inset;
      border: none;
      border-radius: 10px;
      margin-left: 79%;
      width: 21%;
    }

    ${(props) =>
      props.text_color === "white" &&
      css`
        .seven:hover ~ .hr {
          box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
          border: none;
          border-radius: 10px;
          width: 21%;
        }
        .eight:hover ~ .hr {
          box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
          border: none;
          border-radius: 10px;
          margin-left: 21%;
          width: 29%;
        }
        .logout:hover ~ .hr {
          box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
          border: none;
          border-radius: 10px;
          margin-left: 50%;
          width: 29%;
        }
        .menu:hover ~ .hr {
          box-shadow: 5px 10px 50px hsl(0deg 0% 100% / 33%) inset;
          border: none;
          border-radius: 10px;
          margin-left: 79%;
          width: 21%;
        }
      `}
    @media (max-width: 1161px) {
      margin: 0 10px;
    }
  }
  .one {
    @media (max-width: 1161px) {
      display: none;
    }
  }
  .two {
    @media (max-width: 1161px) {
      display: none;
    }
  }

  @media (max-width: 1350px) {
    margin-right: 30px;
  }

  @media (max-width: 1161px) {
    justify-content: flex-end;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  z-index: 10; //Z Index (z-index) is a CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index.
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  overflow: auto;
  color: inherit;
  overflow-x: hidden;
  background: white;

  &::-webkit-scrollbar {
    display: none;
    // border-box:inset 0 0 10px black;
  }

  // justify-content:flex-start; learn about it

  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.35s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    color: inherit;
  }
  ${(props) =>
    props.textcolor === "white" &&
    css`
      background: #222222;
      li {
        border-bottom: 1px solid white;
      }
    `};
  @media (max-width: 430px) {
    width: 60vw;
  }
`;
const Styled2Link = styled(Link)`
  display: inline-block;
  font-weight: 545;
  font-size: 16px;
  color: inherit;
  text-align: start;
  text-transform: none;
  letter-spacing: 0.5px;
  padding: 0, 10px;
  margin-top: 0;
  flex-wrap: nowrap;
  width: 100%;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  width: 40px;
  ${(props) =>
    props.textcolor === "white" &&
    css`
      color: white !important;
      fill: white !important;
    `}
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: inherit;
`;
