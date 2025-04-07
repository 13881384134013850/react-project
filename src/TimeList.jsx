import { useContext } from "react"
import Item from "./Item"
import { timerContext } from "./timerContext"

const TimeList = (props) => {
    const context = useContext(timerContext)
    console.log(context)
    return (
        <div className="main_item_list">
            {context.timeArry.map(item => (
                <Item key={Math.random()}>{item}</Item>
            ))}
        </div>
    )
}

export default TimeList