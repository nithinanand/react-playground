const tileBlock = {
    width:"200px",
    display:"flex",
    float:"left",
    height:"400px",
    marginLeft:"10%",
    border:"solid",
    borderColor:"grey",
    margin:"2%"
}

export default function renderTile(p) {
        
    return (
      <div key={p.id} className="Block" style={tileBlock}>
        <a href="/">
        <p>{p.id}</p>
          <h3>{p.title}</h3>
          <p>${p.body}</p>
          
        </a>
      </div>
    );
  }