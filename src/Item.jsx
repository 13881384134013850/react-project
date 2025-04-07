const Item = (props) => {
    console.log(props.children)
    return (
        <div>{props.children}</div>
    )
}

export default Item