const Hello = (props) =>{
    return(
        <div>
            <h1>welcome {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Hello