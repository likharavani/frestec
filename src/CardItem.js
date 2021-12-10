
const CardItem=(props)=>{
    return (
        <div className="d-flex  justify-content-center align-items-center">
          <img src={props.pic} className="img-fluid" style={{width:"90px", height:"90px"}}></img>
          <div>
              <h4>Title one</h4>
              <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt dolor ex, a cursus massa facilisis et.</small>
          </div>
        </div>
    )
}
export default CardItem;