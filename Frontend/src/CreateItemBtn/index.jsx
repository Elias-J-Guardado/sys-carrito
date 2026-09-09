function CreateItemBtn({onClick}) {
  return (
    <>
        <div>
            <button className="btn btn-primary rounded-circle fs-4 text-center" 
            type="button" 
            onClick={onClick}
            style={{
              boxShadow: "0px 5px 25px rgb(97, 218, 250, 0.5)",
              border: 'none',
              cursor: 'pointer',
              position: 'fixed',
              right: '15px',
              width: '50px',
              bottom: '80px',
              height: '50px',
              zIndex: 9999,
            }}>
              +
            </button>
        </div>
    </>
  );
}

export {CreateItemBtn};