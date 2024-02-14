import './App.css';

const App = () =>{
  return(
    <section className="movie-container">
            <MovieCompo/>
            <MovieCompo/>
            <MovieCompo/>
            <MovieCompo/>
            <MovieCompo/>
            <MovieCompo/>
            <MovieCompo/>
            <MovieCompo/>
            <MovieCompo/>
            <MovieCompo/>
          

    </section>
  );
}


const MovieCompo=()=>{
    return(
      <article className="each-mve">
      <ImageCompo/>
      <Title/>
      </article>

    )
}

// Image component 
const ImageCompo=()=>{
  return(
    <img src="https://qph.cf2.quoracdn.net/main-qimg-ee77aeadd4c75e54f1cff5373c56daea" alt="netflix-img" />
  );
}

// title component
const Title =()=>{
  // const styles = {
  //   heading: {
  //     color: "red",
  //     fontSize: "30px",
  //   }
  // };
  // return <h3 style={{color: "red", fontSize:"30px"}}>Glass Onion</h3>;
  // return <h3 style={styles.heading}>Glass Onion</h3>
  return <h3 className="heading">Hidden Love</h3>
}
export default App;
