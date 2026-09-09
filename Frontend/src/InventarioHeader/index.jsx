function InventarioHeader({onOpenFavoritos, favoritos}) {
    return (
        <header style={{
            backgroundColor: '#4388de',
        }}>
            <nav className='navbar navbar-expand-lg navbar-light shadow-sm'>
                <div className="container">
                    <a href="#" className='navbar-brand text-white mx-3'>SysInventario</a>


                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target='#navbarMain'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarMain'>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a href="#" className='nav-link active text-white'>Inicio</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link active text-white' 
                                onClick={onOpenFavoritos}
                                >Favoritos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export { InventarioHeader }