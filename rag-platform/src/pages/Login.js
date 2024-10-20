import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 실제 로그인 로직을 추가할 수 있습니다.
    console.log('로그인 시도:', email, password);
    
    // 로그인 성공으로 가정하고 상태를 변경합니다.
    setIsLoggedIn(true);
    
    // API Key 입력 페이지로 이동합니다.
    navigate('/api-keys');
  };

  return (
    <Box sx={{ maxWidth: 300, margin: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        로그인
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>
      </form>
      {/* <Typography variant="body2" align="center">
        계정이 없으신가요? <Link to="/register" style={{ color: 'inherit', textDecoration: 'underline' }}>회원가입</Link>
      </Typography> */}
    </Box>
  );
}

export default Login;