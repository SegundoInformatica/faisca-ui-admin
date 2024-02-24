import { useEffect, useState } from "react"
import api from "../../../services/api";
import NavBar from "../../../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import "./AddArticle.css"
import { toast } from "react-toastify";

export default function AddArticle() {
    const navigate = useNavigate();

    const [authors, setAuthors] = useState([]);
    const [authorInput, setAuthorInput] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [text, setText] = useState("");
    const [advisor, setAdvisor] = useState("");
    const [coordinator, setCoordinator] = useState("");
    const [pdfPath, setPdfPath] = useState("");

    const createArticleJSON = () => {
        if (!title || !summary || !text || !advisor || !coordinator || !pdfPath || authors.length === 0) {
            toast.warn("Todos os campos devem ser preenchidos.");
            return;
        }

        const articleJSON = {
            title: title,
            summary: summary,
            text: text,
            advisor: advisor,
            coordinator: coordinator,
            pdfPath: pdfPath,
            authors: authors
        };

        try {
            api.post("artigos/save", articleJSON)
                .then((response) => {
                    if (response.status == 204)
                        toast.success("Artigo adicionado com sucesso!")
                    navigate("/Artigos");
                })
        }
        catch (error) {
            toast.error("Algo deu errado, por favor contate o suporte!")
        }

        return articleJSON;
    }


    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addAuthor();
        }
    };

    const addAuthor = () => {
        if (authorInput.trim() !== "") {
            setAuthors([...authors, authorInput.trim()]);
            setAuthorInput("");
        }
    };

    const removeAuthor = (index) => {
        setAuthors(authors.filter((author, i) => i !== index));
    };

    return (
        <>
            <NavBar />
            <div className="container-add-article">
                <h3 className="titlePrincipal">Adicionar Artigo</h3>
                <div className="form-add-article df fdc aic w80">
                    <div className="form-group w100">
                        <label >Título:</label><br />
                        <input className="w100" type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="w100 df gap20 ">
                        <div className="form-group w20">
                            <label>Resumo:</label>
                            <textarea rows="20" value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>
                        </div>
                        <div className="form-group w75">
                            <label htmlFor="text">Texto:</label>
                            <textarea rows="20" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div className="w100 df jcsb">
                        <div className="form-group w30">
                            <label htmlFor="advisor">Orientador:</label>
                            <input
                                type="text"
                                id="advisor"
                                name="advisor"
                                value={advisor}
                                onChange={(e) => setAdvisor(e.target.value)}
                            />
                        </div>
                        <div className="form-group w30">
                            <label htmlFor="coordinator">Coordenador:</label>
                            <input
                                type="text"
                                id="coordinator"
                                name="coordinator"
                                value={coordinator}
                                onChange={(e) => setCoordinator(e.target.value)}
                            />
                        </div>
                        <div className="form-group w30">
                            <label htmlFor="pdfPath">Caminho do PDF:</label>
                            <input
                                type="text"
                                id="pdfPath"
                                name="pdfPath"
                                value={pdfPath}
                                onChange={(e) => setPdfPath(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="w100 df jcsb">
                        <div className="form-group w30">
                            <label htmlFor="authorInput">Adicionar Autor:</label>
                            <input
                                type="text"
                                id="authorInput"
                                value={authorInput}
                                onChange={(e) => { setAuthorInput(e.target.value) }}
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                        <table className="table-admin w60" >
                            <thead>
                                <tr>
                                    <th>Nome do Autor</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {authors.length == 0 ?
                                    <tr>
                                        <td colSpan="2">Nenhum Autor Adicionado</td>
                                    </tr>

                                    :
                                    authors.map((author, index) => (
                                        <tr key={index}>
                                            <td>{author}</td>
                                            <td>
                                                <button onClick={() => removeAuthor(index)}>Remover</button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <button className="w100" onClick={createArticleJSON}>Enviar</button>
                </div>
            </div>
        </>

    )
}