import React from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IToDo {
    userId: number;
    title: string;
    completed: boolean;
}

export default function ToDoForm() {

  const queryClient = useQueryClient()


    const [data, setData] = React.useState<IToDo>({        
         userId: 0,
      title: "",
      completed: false,
    });

    const addTodoMutation = useMutation({
    // The async function that performs the mutation
    mutationFn: async (newTodo) => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      return response.json(); // The result of the mutation
    },

    // Called when the mutation succeeds
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['users'] })
      console.log("Todo added successfully:", data);
    },

    // Called if the mutation fails
    onError: (error) => {
      console.error("Error creating todo:", error);
    },

    // Called no matter success or failure
    onSettled: () => {
      console.log("Mutation completed.");
    },
  });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodoMutation.mutate(data);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Title' value={data.title}
         onChange={(e) => setData({...data, title: e.target.value})} />
        <input type="number" placeholder='Enter UserId' value={data.userId} 
        onChange={(e) => setData({...data, userId: +e.target.value})} />
        <label>
            Completed:
            <input type="checkbox" checked={data.completed} 
            onChange={(e) => setData({...data, completed: e.target.checked})} />
        </label>
        <button type='submit'>Submit</button>
        

    </form>
  )
}
