import"../assets/style/index.css"
function Login({dt}){
    return(
            <div>
                <br></br>
            <span>{dt}</span>
            <input type="text" id="" name="nombre" placeholder="Name"/>
            <span>{dt}</span>
            <input type="text" id="" name="apellido" placeholder="Last Name"/>
            <span>{dt}</span>
            <input type="number" id="" name="edad" placeholder="Age"/>
            <span>{dt}</span>
            <input type="text" id="" name="areatrabajo" placeholder="work area"/>
            <span>{dt}</span>
            <input type="date" id="" name="fecha de nacimiento" placeholder="Date of Birth"/>
            <span>{dt}</span>
            <input type="tel" id="" name="telefono" placeholder="Telephone"/>
            <span>{dt}</span>
            <input type="email" id="" name="correo" placeholder="Email"/>
            <span>{dt}</span>
            <input type="password" id="" name="contraseña" placeholder="Password"/>
            <input type="guardar" value="Guardar"/>

            
        </div>
    );
}
export default Login;