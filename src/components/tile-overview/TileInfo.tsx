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
  const ref = useRef<HTMLSpanElement>(null);
  const [displayedName, setDisplayedName] = useState('');

  useEffect(() => {
    const fullName = `${client.surname} ${client.name[0]}. ${client.lastname[0]}.`;

    if (ref.current) {
      ref.current.textContent = fullName;

      if (ref.current.scrollWidth > ref.current.offsetWidth) {
        const shortenedName = `${client.surname} ${client.name[0]}. &hellip;`;
        setDisplayedName(shortenedName);
      } else {
        setDisplayedName(fullName);
      }
    }
  }, [client]);

  return (
    <div className={style.ticketInfo}>
      <div className={style.container}>
        <div className={style.keyColumn}>
          <p className={style.creation}>Создана:</p> 
          {completedAt ? (
            <p className={style.completed}>Выполнена:</p>
              ) : (
            <p className={style.control}>Контроль:</p>
          )}      
          <p className={style.system}>Система:</p>
          <p className={style.fullname}>ФИО:</p>
          <p className={style.object}>Объект:</p>
        </div>
        <div className={style.valueColumn}>
          <span className={style.createdAt}>{formatDate(createdAt)}{' '}       
            {duration && (
              <span className={style.duration}>({getDuration(duration)})</span>
            )}
          </span>        
          {completedAt ? (
            <span className={style.completedAt}>{formatDate(completedAt)}</span>
              ) : (
            <span className={style.controlAt}>{formatDate(controlDate)}</span>
          )}
          <span className={style.tileType}>{system} &#448; {tileType}</span>
          <span className={style.name} ref={ref}>{displayedName}</span>
          <span className={style.address}>{location.name}&#44; {location.city}&#44; {location.street}</span>
        </div> 
      </div> 
    </div>
  )
};
