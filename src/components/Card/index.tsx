import { type Character } from '../../types/types';
import { CardContainer, CardImage, CardInfo } from './styles';

interface CardProps {
  character: Character;
}

export function Card({ character }: CardProps) {
  console.log('Rendering Card for:', character);
  return (
    
    <CardContainer>
      <CardImage src={character.image || ''} alt={character.name || 'Sem nome'} />
      <CardInfo>
        <h2> {character.name || 'Sem nome'}</h2>
        <p> {character.species || 'Desconhecido'}</p>
        
      </CardInfo>
    </CardContainer>
  );
}