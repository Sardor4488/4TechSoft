import styled from "styled-components";

const HeaderCss = styled.div`
a{
    text-decoration: none !important;
}
.header{
    background-color:#fff;
    /* position: fixed; */
    box-shadow: -6px 1px 9px -3px rgba(34, 60, 80, 0.23);
    width: 100%;
}
.MuiTab-root{
    /* padding-bottom:0; */
}
.success{
    background-color:green !important;
}
.css-1aquho2-MuiTabs-indicator{
background-color:#00E472;
}
.faBars{
    display:none;
    cursor: pointer;
    font-size:20px;
}
.logo{
    margin-bottom: 0 !important;
}
.md-nav{
    width: 220px;
    height: 100vh;
    background-color:#fff;
    box-shadow: -6px 1px 9px -3px rgba(34, 60, 80, 0.23);
    position:absolute;
    top:0; 
    right:0;
    transition: all 0.4s;
    animation-name:navAnimate;
    animation-duration:0.4s;
}
.shadow-header{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.53);
}

@keyframes navAnimate {
    0%{
        right:-100%;

    }
    100%{
        right:0;
    }
}
.faXmark{
    cursor:pointer;
}
.d-show-nav{
    display:none !important;
    transition: all 0.4s; 
} 
@media only screen and (max-width:1065px) {
    .lg_none{
        display:none;
    }
    .faBars{
    display:block !important;
}
}
.text-success{
    color:#00E472 !important;
}
.md-nav{
display:block;
}
`
export default HeaderCss;