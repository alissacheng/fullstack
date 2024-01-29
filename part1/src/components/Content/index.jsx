import Part from "./Part"
const Content = ({ parts }) => {
    return(
    <>
    {parts.map((item)=> {
        return <Part key={item.part} part={item} />
    })}
    </>
    )
}

export default Content;