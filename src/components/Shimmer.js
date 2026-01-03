const ShimmerUI = () =>{
    return (
        <>
        <div className="resto-list">
            
            {Array(10).fill("").map((_, index) => (
                <div className="shimmer-card" key={index}></div>
            ))}
        </div>
        </>
    )
}

export default ShimmerUI;