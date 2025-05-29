import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingContainer, LoadingImage } from './styles';
import loadingImage from '../../assets/img/loading.png';

export function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona para /characters após 2 segundos
    const timer = setTimeout(() => {
      navigate('/characters');
    }, 500);

    // Limpa o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <LoadingContainer>
      <LoadingImage src={loadingImage} alt="Loading..." />
    </LoadingContainer>
  );
}