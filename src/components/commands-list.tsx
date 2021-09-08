import { commands } from '../types/commandList';

const CommandsList = () => {
  const commandsList = commands;
  return (
    <table className="table table-striped table-responsive table-dark">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {commandsList.map((command: any) => (
          <tr key={command.Name}>
            <td className="smaller">{command.Name}</td>
            <td>{command.Description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommandsList;
