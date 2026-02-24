

export function Home() {

    return(
        <main className="bg-white">
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-96 h-[30rem] flex justify-center items-center">
                    <input 
                        type="search" 
                        placeholder="" 
                        className="bg-input" 
                    />
                    <h1>
                        Connectez votre talent aux<br />
                        opportunités qui comptent.    
                    </h1>
                    <h3>Stages, alternances et emplois réunis sur une seule plateforme intelligente.</h3>
                    <p>Trouvez plus vite le poste qui vous correspond grâce à une recherche optimisée, des offres<br />
                        ciblées et une expérience pensée pour les candidats comme pour les recruteurs. WorkLink<br />
                        simplifie la mise en relation entre compétences réelles et opportunités concrètes.
                    </p>
                    <div>
                        <button>Commencer </button>
                    </div>
                </div>
            </div>
        </main>
    )
}