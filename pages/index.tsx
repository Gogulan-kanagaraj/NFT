import type { NextPage } from 'next';
import { Container } from '@mui/material';
import NavBar from './navBar';
import React from 'react';
import DataGrid from './datagrid';
import SearchBar from './search';
const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f5" }}>
      <NavBar></NavBar>
      <Container>
        <SearchBar />
        <DataGrid />
      </Container>
    </div>
  )
}

export default Home
