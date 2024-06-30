const Title = () => {
  return (
    <section className="container text-center h-96 md:h-screen flex md:justify-end">
      <div className="h-full md:text-left md:w-1/2 flex flex-col gap-y-12 justify-center items-center md:items-start">
        <h1 className="text-2xl md:text-3xl">
          Leonardo Buziki
          <br />
          <span className="text-xl">Psicólogo Clinico</span>
        </h1>
        <button className="bg-slate-300 text-sm w-[60%] md:w-1/2 p-2 border-2 border-black border-r rounded-lg">
          AGENDAR CONSULTA
        </button>
        <p className="text-xl">A ajuda começa onde onde o ego termina</p>
      </div>
    </section>
  );
};

export { Title };
