const History = ({allClicks}) => {
    if(allClicks.length === 0){
        return(
            <div>
                The app is used by pressing buttons
            </div>
        )
    }
    return(
        <div>
            butotn press history {allClicks.join(' ')}
        </div>
    )
}

export default History;