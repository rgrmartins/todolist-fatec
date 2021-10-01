import React, { useState, useEffect } from 'react';
import { Container, Content, FormStyles, Error, FormDataGrid, Button, TotalTarefas } from './styles';
import { useForm } from 'react-hook-form';
import DataTable, { createTheme } from 'react-data-table-component';
import {v4 as uuidv4 } from 'uuid';
import { FaCheck, FaTrash } from 'react-icons/fa';
import Header from '../../components/Header';

const Dashboard = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Mock de database
  const [tasks, setTasks] = useState([]);
  const [tarefasPendentes, setTarefasPendentes] = useState(0);

  useEffect(() => {
    setTarefasPendentes(tasks.filter(task =>  !task.status).length)
  });

  // Tema da Tabela
  createTheme('fatec-light', {
    text: {
      primary: '#002a5c',
    },
    background: {
      primary: '#e7e9ea'
    },
    divider: {
      primary: '#fff'
    }
  });

  const customStyles = {
    rows: {
      style: {
        minHeight: '40px',
        background: '#a4c0ed',
      }
    },
    headCells: {
      style: {
        background: '#2d5980',
        color: '#fff',
        paddingLeft: '25px'
      }
    },
    cells: {
      style: {
        paddingLeft: '15px'
      }
    }
  }

  // const mock = [
  //   {
  //     id: 1
  //     tarefa: 'Tarefa 1',
  //     completa: false,
  //     categoria: Filme
  //   }
  // ]

  // TODO: Chamado para API (buscando as tarefas desse usuário)
  // TODO: tasks.push('data.tarefa') --> add no array

  const onSubmit = data => {
    setTasks([...tasks, {
      id: uuidv4(),
      tarefa: data.tarefa,
      status: false,
    } ]);
    reset();
    // TODO: Integração com backend, aqui seria a chamada para criar uma nova task
  }

  const handleChangeStatus = row => {
    const objIndex = tasks.findIndex(task => task.id === row.id);
    const newTasks = [...tasks];
    newTasks[objIndex].status = !row.status;
    setTasks([...newTasks]);
  }

  function handleDelete(row) {
    const objIndex = tasks.findIndex(task => task.id === row.id);
    const newTasks = [...tasks];
    newTasks.splice(objIndex, 1);
    setTasks([...newTasks]);
  }

  const columns = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'Tarefa',
      selector: row => row.tarefa
    },
    {
      name: 'Status',
      selector: row => row.status === false ? 'Pendente' : 'Completa'
    },
    {
      cell: row => <Button onClick={() => handleChangeStatus(row)}><FaCheck /></Button>,
      button: true,
      name: 'Concluir',
      allowOverflow: true
    },
    {
      cell: row => <Button onClick={() => handleDelete(row)}><FaTrash /></Button>,
      name: 'Deletar',
      button: true,
      allowOverflow: true
    }
  ]

  return (
    <>
      <Header />
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
              theme='fatec-light'
              customStyles={customStyles}
              highlightOnHover
              pointerOnHover
            />
          </FormDataGrid>
          <TotalTarefas>
            <p>Tarefas Pendentes: <b>{tarefasPendentes}</b></p>
          </TotalTarefas>
        </Content>
      </Container>
    </>
  );
}

export default Dashboard;
