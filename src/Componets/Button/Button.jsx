// import './Button'
export default function Button({ onDelete, onToogle }) {
    return(
        <>
        <div className='Buttons'> <button onClick={onToogle}>✔</button>
       <button onClick={onDelete}>❌</button></div>
       
        </>
    )
}