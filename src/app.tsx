export function App() {
  return (
    <div>
      <main>
        <div className="flex justify-center">
          <form className="text-center text-blue-800 form-container p-8 rounded-tr-2xl  shadow-lg w-[100vh] h-auto">
            <header>
              <h1 className="rgba(59, 130, 246, .5) text-center text-4xl">Cadastro de chamados</h1>
            </header>

            <div className="mt-10">
              <section className="flex justify-center">
                <label htmlFor="item" className="rgba(59, 130, 246, .5) text-2xl">Item para manutenção</label>
              </section>
              <div className="flex justify-center mt-3">
                <input
                  className="mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  type="text"
                  id="item"
                />
              </div>
            </div>

            <div className="mt-10">
              <section className="flex justify-center">
                <label htmlFor="patrimonio" className="rgba(59, 130, 246, .5) text-2xl">Patrimônio</label>
              </section>
              <div className="flex justify-center mt-3">
                <input
                  className="mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  type="text"
                  id="patrimonio"
                />
              </div>
            </div>

            <div className="mt-10">
              <section className="flex justify-center">
                <label htmlFor="numeroPatrimonio" className="rgba(59, 130, 246, .5) text-2xl">Número de patrimônio</label>
              </section>
              <div className="flex justify-center mt-3">
                <input
                  className="mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  type="number"
                  id="numeroPatrimonio"
                />
              </div>
            </div>

            <div className="mt-10">
              <section className="flex justify-center">
                <label htmlFor="numeroSerie" className="rgba(59, 130, 246, .5) text-2xl">Número de série</label>
              </section>
              <div className="flex justify-center mt-3">
                <input
                  className="mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  type="number"
                  id="numeroSerie"
                />
              </div>
            </div>

            <div className="mt-10">
              <section className="flex justify-center">
                <label htmlFor="modelo" className="rgba(59, 130, 246, .5) text-2xl">Modelo</label>
              </section>
              <div className="flex justify-center mt-3">
                <input
                  className="mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  type="text"
                  id="modelo"
                />
              </div>
            </div>

            <div className="mt-10">
              <section className="flex justify-center">
                <label htmlFor="localizacao" className="rgba(59, 130, 246, .5) text-2xl">Indicar localização</label>
              </section>
              <div className="flex justify-center mt-3">
                <input
                  className="mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  type="text"
                  id="localizacao"
                />
              </div>
            </div>

            <div className="mt-10">
              <section className="flex justify-center">
                <label htmlFor="dataAbertura" className="rgba(59, 130, 246, .5) text-2xl">Data de abertura</label>
              </section>
              <div className="flex justify-center mt-3">
                <input
                  className="mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  type="date"
                  id="dataAbertura"
                />
              </div>
            </div>

            <div className="mt-10">
              <section className="flex justify-center">
                <label htmlFor="descricaoProblema" className="rgba(59, 130, 246, .5) text-2xl">Descrição do problema</label>
              </section>
              <div className="flex justify-center mt-3">
                <textarea
                  className="mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  id="descricaoProblema"
                  rows={4}
                />
              </div>
            </div>

            <div className="mt-10">
              <section className="flex justify-center">
                <label htmlFor="observacoes" className="rgba(59, 130, 246, .5) text-2xl">Observações</label>
              </section>
              <div className="flex justify-center mt-3">
                <textarea
                  className="mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  id="observacoes"
                  rows={4}
                />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button type="submit" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Enviar formulário
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
