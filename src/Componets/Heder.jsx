
function Heder () {
    const now = new Date()
    return(
        <>
    <p>{now.toLocaleDateString()}</p>
    <h1>Ваши задачи на сегодня</h1>
</>)}
export default Heder