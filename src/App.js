import React, { useState, useEffect } from 'react';
import './App.css';
import { Form, Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App () {
  
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    fetch('https://api.github.com/users/BrenoRedx')
      .then(res => res.json())
      .then(data => {
        setData(data)
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url
    }) => {
      setName(name);
      setUsername(login);
      setFollowers(followers);
      setFollowing(following);
      setRepos(public_repos);
      setAvatar(avatar_url);
  }
  
  const pesquisa = (e) => {
    setUserInput(e.target.value)
  }

  const enviar = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        setError(data.message)
      }else{
        setData(data);
        setError(null);
      }
    });
  };
  
  return (
  <div>
  <div className="navbar"><b>GitHub Repositórios API</b></div>
  <div className="Pesquisa">    
    <Form onSubmit={enviar}>
    <Form.Group>
      <Form.Input placeholder='Nome de usuário' name='github user' onChange={pesquisa} />
      <Form.Button content='Search'/>
    </Form.Group>
    </Form>
  </div>
  {error ? (<h1 className='teste'>{error}</h1>) : (
    <div className="card">
    <Card>
    <Image src={avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Header>{userName}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {followers} Seguidores
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {following} Seguindo
      </a>
    </Card.Content>
    <Card.Content>
      <a href="https://github.com/BrenoRedx?tab=repositories">
        <Icon name='user' />
        {repos} Repositórios
      </a>
    </Card.Content>
  </Card>
  </div>)}
  </div>
  )
};

export default App;
