import { useEffect, useRef, useState } from 'react';
import style from './styles.module.css';
import { formatDate } from './utils/formatDate';
import { getDuration } from './utils/getDuration';

export interface Location {
  name: string;
  city: string;
  street: string;
}

export interface Client {
  surname: string;
  name: string;
  lastname: string;
}

type Props = {
  createdAt: string;
  controlDate: string;
  completedAt?: string;
  system: string;
  tileType: string;
  client: Client;
  location: Location;
  duration?: number;
}

export const TileInfo = ({
  createdAt,
  duration,
  controlDate,
  completedAt,
  system,
  tileType,
  client,
  location
}: Props) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [displayedName, setDisplayedName] = useState('');

  useEffect(() => {
    const fullName = `${client.surname} ${client.name[0]}. ${client.lastname[0]}.`;

    if (containerRef.current) {
      containerRef.current.textContent = fullName;

      if (containerRef.current.scrollWidth > containerRef.current.offsetWidth) {
        const shortenedName = `${client.surname} ${client.name[0]}. &hellip;`;
        setDisplayedName(shortenedName);
      } else {
        setDisplayedName(fullName);
      }
    }
  }, [client]);
  
  return (
    <div className={style.ticketInfo}>
    <span>Создана: {formatDate(createdAt)}</span>
      {duration && (
        <span>({getDuration(duration)})</span>
      )}
    <span>
      {completedAt ? `Выполнена: ${formatDate(completedAt)}` : `Контроль: ${formatDate(controlDate)}`}
    </span>
    <span>Система: {system} &#448; {tileType}</span>
    <span ref={containerRef} className={style.fullname}>
      ФИО: {displayedName}
    </span>
    <span>
      Объект: {location.name}&#44; {location.city}&#44; {location.street} 
    </span>
  </div>
  )
}
