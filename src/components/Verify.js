import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
  const [message, setMessage] = useState('');
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/auth/verify/${token}`);
        setMessage(res.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };

    verifyEmail();
  }, [token]);

  return <p>{message}</p>;
};

export default Verify;