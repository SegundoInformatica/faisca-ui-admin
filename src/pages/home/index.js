import NavBar from "../../components/navbar";
import "../home/style.css"

export default function Home() {
    return (
        <div className="principal">
            <NavBar />
            <h3 className="titlePrincipal">Admin</h3>
            <div className="boxPrincipal">
                <div className="bodyItens">
                    <div className="boxPrincipalArtigos">
                        <h3>artigos</h3>
                        <div className="divClassArtigos">
                            <div className="boxTickets">
                                <h2>Aprovação</h2>
                            </div>
                            <div className="boxArtigos">

                            </div>
                        </div>
                    </div>

                    <div className="boxPrincipalArtigos">
                        <h3>artigos</h3>
                        <div className="divClassArtigos">
                            <div className="boxArtigos">
                                <h2>ver</h2>
                            </div>
                            <div className="boxArtigos">
                                <h2>add</h2>
                            </div>
                            <div className="boxArtigos">
                                <h2>ver</h2>
                            </div>
                            <div className="boxArtigos">

                            </div>
                        </div>
                    </div>

                    <div className="boxPrincipalArtigos">
                        <h3>artigos</h3>
                        <div className="divClassArtigos">
                            <div className="boxArtigos">
                                <h2>ver</h2>
                            </div>
                            <div className="boxArtigos">
                                <h2>add</h2>
                            </div>
                            <div className="boxArtigos">
                                <h2>ver</h2>
                            </div>
                            <div className="boxArtigos">

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}