import { useState } from 'react';
import style from './styles.module.css';
import { TileHeader } from './TileHeader';

interface Location {
  name: string;
  city: string;
  street: string;
}

interface Props {
  id: string;
  tileNumber: number;
  createdAt: string;
  controlDate: string;
  completedAt?: string;
  system: string;
  tileType: string;
  location: Location;
  description: string;
  status: Array<string>; 
  isTechnological: boolean;
  files?: Array<string>; 
}

export const TileOverview = ({
  id,
  tileNumber,
  createdAt,
  controlDate,
  completedAt,
  system,
  tileType,
  location,
  description,
  status,
  isTechnological
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prevState) => !prevState);

  return (
    <div className={`${id} ${style.tile} ${isExpanded ? style.expanded : ''}`}>
      <TileHeader 
        tileNumber={tileNumber} 
        tileType={tileType} 
        status={status} 
        isTechnological={isTechnological}
      />
      <div className={style.ticketInfo}>
        <span>Создана: {createdAt}</span>
        <span>
          {completedAt ? `Выполнена: ${completedAt}` : `Контроль: ${controlDate}`}
        </span>
        <span>Система: {system}</span>
        <span>Тип: {tileType}</span>
        <span>
          Объект: {location.city}, {location.street}, {location.name}
        </span>
      </div>
      <div className={style.description}>
        <p className={isExpanded ? style.fullDescription : style.truncatedDescription}>
          {description}
        </p>
        <div className={style.overlay}>
          <button className={style.readMoreButton} onClick={toggleExpand}>
            {isExpanded ? 'Свернуть' : 'Читать далее'}
          </button>   
        </div>
      </div>
    </div>
  );
};
