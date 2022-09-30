import Header from "../componentes/Header";
//import Body from "../componentes/Body";
//import Card from "../componentes/Card"
import CardL from "../componentes/CardLogin"
import Login from "../componentes/Login"

 function Layout({children}){
    return(
        <>
        <Header/>    
            {children}
            <Login/>
        
        </>
    );
 }

 export default Layout;