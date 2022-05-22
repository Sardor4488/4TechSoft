import styled from "styled-components";

const HeaderCss = styled.div`
a{
    text-decoration: none !important;
}
.header{
    background-color:#fff;
    /* position: fixed; */
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
    width: 190px;
    margin-bottom: 0 !important;
}
.md-nav{
    width: 250px;
    height: 100vh;
    background-color:#fff;
    box-shadow: -6px 1px 9px -3px rgba(34, 60, 80, 0.23);
    position:absolute;
    top:0;
    right: 0;
    /* display:none !important; */
}

@media only screen and (max-width:1164px) {
    .lg_none{
        display:none;
    }
    .faBars{
    display:block !important;
}
}
.success{
    color:#00E472 !important;
}
.md-nav{
display:block;
}
`
export default HeaderCss;