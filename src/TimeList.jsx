import Item from "./Item"

const TimeList = (props) => {
    console.log(props.children)
    return (
        <div className="main_item_list">
            {props.children.map((item, index) => ( 
                <Item key={index}>{item}</Item>
            ))}
        </div>
    )
}

// props.children موادری که بین تگ باز و بسته کامپوننت ما قرار می گیرد

// داخل ری اکتی میگه هر چی که بین یک تگ باز و بسته قرار دادی و ارسال کردی می توانی در چیلدرن دریافت کنی

export default  TimeList