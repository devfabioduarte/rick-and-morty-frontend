import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingContainer, LoadingImage } from './styles';
import loadingImage from '../../assets/img/loading.png';

export function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/characters');
    }, 500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <LoadingContainer>
      <LoadingImage src={loadingImage} alt="Loading..." />
    </LoadingContainer>
  );
}