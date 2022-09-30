import"../assets/style/Estilo.css"
function Body({name,rating,imag}){
    return(

        <div class="responsive">
        <div class="gallery">
            <a><img width={350}  src={imag}/>

            </a>
        
          <div class="desc">
            <span>{name}</span>
            <br></br>
            <span>{rating}</span>
          </div>
        </div>
      </div>
       
    );

}
export default Body;