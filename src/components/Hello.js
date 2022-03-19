// Membuat component hello
// COMPONENT
const Hello = (props) => {
    // Diluar return adalah javascript biasa

    // Didalam return adalah jsx
    return(
        <div className="hello">
            <h2> Hello React </h2>
            <p> {props.nama} - {props.jabatan}</p>
        </div>
    );
}

export default Hello;