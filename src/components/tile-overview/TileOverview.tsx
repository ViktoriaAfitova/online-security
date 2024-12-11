import style from './styles.module.css';

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
  return (
    <div className={`${id} ${style.tile}`}>
      <div className={style.ticketHeader}>
        <div className={style.tileNumber}>№ {tileNumber}</div>
          {status.map((currentStatus, index) => (
            <p key={index} className={style.status}>
              {currentStatus}
            </p>
          ))}
        {isTechnological && <span className={style.technologicalIcon}>⚙️</span>}
      </div>
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
        <p>{description}</p>
      </div>
    </div>
  );
};
