export default function tasks({ tasks }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            let temp = "";
            if (task.completed) {
              temp = "line-through";
            }
            return (
              <tr key={task.name}>
                <td>
                  <span
                    style={{
                      textDecoration: temp,
                    }}
                  >
                    {task.name}
                  </span>
                </td>
                <td>{task.dueDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
