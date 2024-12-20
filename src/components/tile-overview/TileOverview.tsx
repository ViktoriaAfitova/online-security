import style from './styles.module.css';
import { TileHeader } from './TileHeader';
import { Client, TileInfo } from './TileInfo';
import { Location } from './TileInfo';
import { TileDescription } from './TileDescription';

interface Props {
  id: string;
  tileNumber: number;
  createdAt: string;
  duration?: number;
  controlDate: string;
  completedAt?: string;
  system: string;
  tileType: string;
  client: Client;
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
  duration,
  controlDate,
  completedAt,
  system,
  tileType,
  client,
  location,
  description,
  status,
  isTechnological
}: Props) => {
  const isExpanded = false;

  return (
    <div className={`${id} ${style.tile} ${isExpanded ? style.expanded : ''}`}>
      <TileHeader 
        tileNumber={tileNumber}
        status={status} 
        isTechnological={isTechnological}
      />
      <TileInfo 
        createdAt={createdAt}
        controlDate={controlDate}
        completedAt={completedAt}
        system={system}
        tileType={tileType} 
        client={client}
        location={location}
        duration={duration}      
      />
      <TileDescription
        description={description}      
      />
    </div>
  );
};
