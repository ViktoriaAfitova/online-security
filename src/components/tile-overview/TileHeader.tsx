import style from './styles.module.css';
import { statusesMap } from '../../lib/constants/statuses';

type Props = {
  tileNumber: number;
  tileType: string;
  status: Array<string>; 
  isTechnological: boolean;
  files?: Array<string>; 
}

const getStatusColor = (tileType: string): string => {
  return statusesMap[tileType] || 'rgba(93, 93, 93, 1)'; 
};

const getCurrentStatus = (status: Array<string>, tileType: string): string | null => {
  return status.includes(tileType) ? tileType : null;
};

export const TileHeader = ({
  tileNumber,
  tileType,
  status,
  isTechnological = false
}: Props) => {
  const currentStatus = getCurrentStatus(status, tileType);
  
  return (
    <div className={style.header}>
      <div 
        className={style.tileNumber}
        style={{
          backgroundColor: getStatusColor(tileType),
        }}
      >
        <p className={style.number}>№ {tileNumber.toLocaleString('ru-RU')}</p>
      </div>
        <p className={style.status}>
          {currentStatus}
        </p>
      {isTechnological && <span className={style.technologicalIcon}>⚙️</span>}
    </div>
  )
};
