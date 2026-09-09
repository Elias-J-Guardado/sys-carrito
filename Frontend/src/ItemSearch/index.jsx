function ItemSearch({busqueda, onSearch}) {
    return (
        <>
            <div className="input-group mb-3 mt-4 w-50 mx-auto">
                <input type="text" value={busqueda} placeholder="Search product..." className="form-control" 
                    onChange={(e) => onSearch(e.target.value)}></input>
                <button type="button" className="btn btn-outline-primary">Buscar</button>
            </div>
        </>
    )
}

export { ItemSearch };