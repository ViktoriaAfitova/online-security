import style from './styles.module.css';
import { statusesMap } from '../../lib/constants/statuses';

type Props = {
  tileNumber: number;
  status: Array<string>; 
  isTechnological: boolean;
  files?: Array<string>; 
}

const getStatusColor = (status: Array<string>): string => {
  const displayedStatus = status.find((status) => statusesMap[status]);
  return displayedStatus ? statusesMap[displayedStatus] : 'rgba(93, 93, 93, 1)';
};

const getCurrentStatus = (status: Array<string>): Array<string> => {
  return status.length > 0 ? status : [];
};

export const TileHeader = ({
  tileNumber,
  status,
  isTechnological = false
}: Props) => {
  const currentStatus = getCurrentStatus(status);
  
  return (
    <div className={style.header}>
      <div 
        className={style.tileNumber}
        style={{
          backgroundColor: getStatusColor(status),
        }}
      >
        <p className={style.number}>№ {tileNumber.toLocaleString('ru-RU')}</p>
      </div>
        <p className={style.status}>
          {currentStatus.join(', ')}
        </p>
      {isTechnological && <span className={style.technologicalIcon}>⚙️</span>}
    </div>
  )
};
