import { useEffect, useState } from "react"
import api from "../../../services/api";
import NavBar from "../../../components/navbar";
import './SeeArticles.css'
import { Link } from "react-router-dom";

export default function SeeArticles() {
    const [articles, setArticles] = useState([]);



    const HandleGetArticles = async () => {
        try {
            await api.get("artigos").then((response) => {
                setArticles(response.data);
            })
        }
        catch (error) {

        }
    };
    useEffect(() => {
        HandleGetArticles();
    }, []);
    return (
        <>
            <NavBar />
            <div className="container-admin">
                <h3 className="titlePrincipal">Artigos</h3>
                <div className="df jcc">
                    <table class="table-admin">
                        <thead>
                            <tr className="table-admin-header-row">
                                <th>Título</th>
                                <th>Resumo</th>
                                <th>Orientador</th>
                                <th>Coordenador</th>
                                <th>Data de Registro</th>
                                <th>Autores</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article, index) => (
                                <tr key={index}>
                                    <td>{article.title}</td>
                                    <td>{article.summary}</td>
                                    <td>{article.advisor}</td>
                                    <td>{article.coordinator}</td>
                                    <td>{article.regDate}</td>
                                    <td>{article.authors.map((author, index) => (
                                        <span key={index}>{author.name}{index !== article.authors.length - 1 ? ', ' : ''}</span>
                                    ))}</td>
                                    <td><button>Abrir</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>

    )
}