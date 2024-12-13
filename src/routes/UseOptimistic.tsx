import { useOptimistic, useState } from "react";

import { FormButton } from "../components/FormButton";
import { utils } from "../utils";

type Props = {
  tasks: string[];
  onAdded: (newTask: string) => void;
};

const Todo: React.FC<Props> = ({ tasks, onAdded }) => {
  const [optTasks, setOptTasks] = useOptimistic<string[], string>(
    tasks,
    (currentState, newState) => [...currentState, newState]
  );

  const handleSubmit = async (formData: FormData) => {
    const newTask = formData.get("task")?.toString() || "";
    setOptTasks(newTask);
    const response = await utils.api.mockCall<string>(() => newTask);
    onAdded(response);
  };

  return (
    <>
      <div className="grid">
        <form action={handleSubmit}>
          <input disabled={tasks.length !== optTasks.length} name="task" />
          <FormButton>Add Task</FormButton>
        </form>
      </div>
      <div className="grid grid-col">
        <p>Optimisticated tasks:</p>
        <ul>
          {optTasks.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const UseOptimistic = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  return (
    <>
      <title>UseOptimistic</title>
      <h1>UseOptimistic</h1>
      <p>
        A common UI pattern when performing a data mutation is to show the final
        state optimistically while the async request is underway. In React 19,
        we&apos;re adding a new hook called <code>useOptimistic</code> to make
        this easier.
      </p>
      <h3>Example: Todo List</h3>
      <Todo
        onAdded={(newTask) => setTasks((oldState) => [...oldState, newTask])}
        tasks={tasks}
      />
      <div className="grid grid-col">
        <p>Current tasks:</p>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        ) : (
          <p>No tasks.</p>
        )}
      </div>
    </>
  );
};
