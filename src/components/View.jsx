export default function View({id, name, depart, grade, stat}){
    return(
           
                 <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{depart}</td>
                    <td>{grade}</td>
                    <td style={{ color: stat === 'Pass' ? 'green' : 'red' }}>{stat}</td>
                 </tr>
    );
}