import icons from "../assets/icons/search.svg"
import arrow from "../assets/icons/arrowCTA.svg"

export function Arrow() {

    return <img src={arrow} alt="Arrow right" />
}

export function Home() {

    return(
        <div className="w-full flex justify-center items-center flex-col mt-20 text-center gap-15">
            <div className="relative w-fit">
                <img
                    src={icons}
                    alt=""
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                />

                <input
                    type="search"
                    placeholder="Search..."
                    className="border border-input rounded-[6px] text-ring bg-transparent pl-8 py-1 md:w-96"
                />
            </div>
            <h1 className="text-card-foreground text-h1">
                Connectez votre talent aux<br />
                opportunités qui comptent.    
            </h1>
            <h3 className="text-subtitle text-muted-foreground">Stages, alternances et emplois réunis sur une seule plateforme intelligente.</h3>
            <p className="text-subtitle text-card-foreground">Trouvez plus vite le poste qui vous correspond grâce à une recherche optimisée, des offres<br />
                ciblées et une expérience pensée pour les candidats comme pour les recruteurs. WorkLink<br />
                simplifie la mise en relation entre compétences réelles et opportunités concrètes.
            </p>
            <div>
                <button className="h-8 pl-14 pr-14 bg-primary text-body1 font-semibold text-primary-foreground rounded-[8px] flex items-center flex-row gap-2">Commencer <div className="pt-1"><Arrow /></div></button>
            </div>
        </div>
    )
}