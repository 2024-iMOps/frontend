import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/auth/register', { email, password });
          console.log('회원가입 응답:', response.data);
          alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
          navigate('/login');
        } catch (error) {
          console.error('회원가입 실패:', error);
          if (error.response) {
            console.error('응답 데이터:', error.response.data);
            console.error('응답 상태:', error.response.status);
            alert(`회원가입 실패: ${error.response.data.message || '알 수 없는 오류가 발생했습니다.'}`);
          } else if (error.request) {
            console.error('요청 오류:', error.request);
            alert('서버에 연결할 수 없습니다. 네트워크 연결을 확인해 주세요.');
          } else {
            console.error('오류 메시지:', error.message);
            alert('회원가입 중 오류가 발생했습니다.');
          }
        }
      };

    return (
        <Box sx={{ maxWidth: 300, margin: 'auto', mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                회원가입
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
                    회원가입
                </Button>
            </form>
            <Typography variant="body2" align="center">
                이미 계정이 있으신가요? <Link to="/login" style={{ color: 'inherit', textDecoration: 'underline' }}>로그인</Link>
            </Typography>
        </Box>
    );
}

export default Register;
