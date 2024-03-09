import './UserPage.css';
import { IoTrashBin } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";


export default function UserPage() {

  const dataWhatever = [
    {
      email: 'and@gmail.com',
      name: "Andrezao",
      status: "PENIS"
    },
    {
      email: 'kaioquen@gmail.com',
      name: "Kaiozao",
      status: "QUE"
    },
    {
      email: 'nathan@gmail.com',
      name: "Nathanzao",
      status: "OI"
    },
    {
      email: 'rih@gmail.com',
      name: "Richardao",
      status: "NOOOSSAAA"
    },
  ]

  return (

    <div className='container'>

      <div className='div-cabecalho'>
        <h1>Usuários</h1>
        <button className="button-add">Adicionar</button>
      </div>


      <div className="container-admin">
        <div className="df jcc">
          <table class="table-admin">
            <thead>
              <tr className="table-admin-header-row">
                <th>Email</th>
                <th>Nome</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {dataWhatever.map(({ email, name, status }, index) => (
                <tr key={index}>
                  <td>{email}</td>
                  <td>{name}</td>
                  <td>{status}</td>
                  <td>
                    <IoTrashBin />
                    <GrPowerCycle />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}