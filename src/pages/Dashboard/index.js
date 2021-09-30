import React, { useState } from 'react';
import { Container, Content, FormStyles, Error, FormDataGrid } from './styles';
import { useForm } from 'react-hook-form';
import DataTable from 'react-data-table-component';

const Dashboard = () => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  // Mock de database
  const [tasks, setTasks] = useState([]);

  // const mock = [
  //   {
  //     id: 1
  //     tarefa: 'Tarefa 1',
  //     completa: false,
  //   }
  // ]

  // TODO: Chamado para API (buscando as tarefas desse usuário)
  // TODO: tasks.push('data.tarefa') --> add no array

  const onSubmit = data => {
    setTasks([...tasks, {
      // TODO: Criar ID
      tarefa: data.tarefa,
      status: false,
    } ]);
    reset();
    // TODO: Integração com backend, aqui seria a chamada para criar uma nova task
  }

  const columns = [
    {
      name: 'Tarefa',
      selector: row => row.tarefa
    },
    {
      name: 'Status',
      selector: row => row.status === false ? 'Pendente' : 'Completa'
    },
    {
      name: 'Opções'
    }
  ]

  return (
    <Container>
      <Content>
        <h1>Tarefas</h1>
        <FormStyles>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Tarefa">Criar uma tarefa</label>
            <input {...register('tarefa', { required: true })} />
            <button type="subimt"> Criar Tarefa </button>
          </form>
          {errors.tarefa && <Error>Esse Campo de tarefa é obrigatório</Error>}
        </FormStyles>
        <FormDataGrid>
          <DataTable
            columns={columns}
            data={tasks}
            noDataComponent={<span>Não há Tarefas para exibir</span>}
          />
        </FormDataGrid>
      </Content>
    </Container>
  );
}

export default Dashboard;
