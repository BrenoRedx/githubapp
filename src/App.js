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

