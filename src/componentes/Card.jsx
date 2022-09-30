import"../assets/style/Estilo.css"
import Body from "./Body";
function Orden (){
    const poster=[
        {
            id:1,
            name:"Homemade Love Story.",
            rating:"Rating de 33.7% audiencia nacional.",
            imag: '../img/Homemade_Love_Story.jpg'

        },
        {
            id: 2,
            name: "Revolutionary Sisters.",
            rating: "Rating de 32.5% de audiencia nacional.",
            imag: '../img/Revolutionary_Sisters.jpg'
            
        },
        {
            id: 3,
            name: "The Penthouse 2 y 3.",
            rating: "The Penthouse 2 Rating de 19.2% audiencia nacional y The Penthouse 3 Rating de 30.6% de audiencia nacional.",
            imag: '../img/Penthouse.jpg'
        },
        {
            id: 4,
            name: "Young Lady and Gentleman.",
            rating: "Rating de 17.8% de audiencia nacional.",
            imag: '../img/caballero.jpg'
        },
        {
            id: 5,
            name: "On the woman.",
            rating: "Rating de 17.8% de audiencia nacional.",
            imag: '../img/one-the-woman.jpeg'
        },
    ];
    return(
        <>
        <h1>DRAMAS COREANOS CON EL RATING MÁS ALTOS</h1>
        <div>
            {poster.map((poster)=>{
                return(
                    <Body
                    key={poster.id}
                    name={poster.name}
                    rating={poster.rating}
                    imag={poster.imag}
                    />
                )
            })}
        </div>
        </>
    );
}
export default Orden;