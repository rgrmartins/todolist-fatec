import React, { useState } from 'react';
import { Container, Content, FormStyles } from './styles';
import { useForm } from 'react-hook-form';
// import DataTable from 'react-data-table-component';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  console.log('tasks Before ----->', tasks);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    setTasks([...tasks, data.tarefa]);
    console.log('tasks ----->', tasks);
    reset();
  }
  // console.log('Watch ---->', watch('tarefa'));


  const columns = [
    {
        name: 'Tarefas',
        selector: row => row.tarefa,
    },
    {
        name: 'Opções',
    },
];

  return (
    <Container>
      <Content>
        <h1>Tarefas</h1>
        <FormStyles>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="tarefa">Crie uma Tarefa</label>
            <input {...register('tarefa', {required: true })} />
            <button type='submit'>Criar Tarefa</button>
          </form>
          {errors.tarefa && <span>O campo Tarefa é obrigatório !</span>}
        </FormStyles>

        {tasks.map(task => (
          <h1>{task}</h1>
        ))}
        {/* <DataTable
            columns={columns}
            data={tasks}
            noDataComponent={<span>Não há Tarefas para exibir</span>}
        /> */}
      </Content>
    </Container>
  );
}

export default Dashboard;
