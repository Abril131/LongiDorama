import Login from "./Login";

function Dato(){
    const data=[
        {
            id:1,
            dt:"Nombre(s):"
        },
        {
            id:2,
            dt:"Apellido(s):"
        },
        {
            id:3,
            dt:"Edad:"
        },
        {
            id:4,
            dt:"Área de trabajo:"
        },
        {
            id:5,
            dt:"Fotografia:"
        },
        {
            id:6,
            dt:"Número de telefono:"
        },
        {
            id:7,
            dt:"Correo:"
        },
        {
            id:8,
            dt:"Contraseña:"
        },
    ];
    return(
        <>   <div>
                {data.map((data)=>{
                    return(
                        <Login
                        key={data.id}
                        dato={data.dt}
                        />
                    )
                })}
        </div>
        </>
     
    );
}

export default Dato;
