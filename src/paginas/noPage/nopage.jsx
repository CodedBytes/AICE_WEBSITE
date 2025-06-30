import './nopage.css';

const NoPage = () => {
    return(
        <>
            <header className='header-404'>
                <span>404 NOT FOUND</span>
            </header>

            <section class="main-404">
                <div class="img-404"></div>

                <div class="information-404">
                    <h1>Temos péssimas notícias</h1>
                    <p>A pagina que esta tentando carregar está indisponível ou é uma pagina invalida.</p>
                    <p>Pedimos desculpas pelo transtorno.</p>
                    <button onClick={() => { window.location.href = '/'; }}>BACK TO HOMEPAGE</button>
                </div>
            </section>
        </>
    )
}

export default NoPage;