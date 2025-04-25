import icon_usuario from "../assets/Iconos/usuario.png";

const Admin_Inicio = () => {
    return(
    <div className="flex flex-col h-full w-full bg-[#947666]">
        <header className="flex flex-col">
            <div>

            </div>
        </header>

        <main className="flex flex-row gap-10 p-8">
            <div className="flex flex-col gap-4 w-1/4 h-screen items-center shadow-xl rounded-2xl bg-white p-8 ">
                <img
                    src={icon_usuario}
                    className="w-20 h-20"
                />
                <p className="font-Montserrat font-bold text-xl text-[#34251d]"> Bienvenido Administrador </p>

                <div className="flex flex-col h-full w-full p-4 pl-6">
                    <p className="font-Montserrat font-semibold text-xl text-left border-black border-b-2 text-[#34251d]">Productos</p>
                    <button > </button>
                </div>

            </div>
            <div className="flex flex-col w-3/4 h-screen items-center shadow-xl rounded-2xl bg-white p-4 p-6 ">
            </div>

        </main>
    </div>
    );
};

export default Admin_Inicio;