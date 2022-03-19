import Hello from "./Hello"

const Main = () => {
    // Mengirim nama dan jabatan
    return(
        <main>
            <Hello nama="Agung Priyo Sembodo" jabatan="Designer"/>
            <Hello nama="Feb" jabatan="Leader"/>
            <Hello nama="Taufik" jabatan="Expert Marketing"/>
            <Hello nama="Irfan" jabatan="Manager"/>
            <Hello nama="Yazid" jabatan="Secretary"/>
        </main>
    )
}

export default Main