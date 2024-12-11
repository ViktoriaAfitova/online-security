import { TileOverview } from '../../components/tile-overview/TileOverview';
import { tiles } from '../../lib/get';
import style from './styles.module.css';

export const TilePage = () => {
  return (
    <div className={style.container}>
      {tiles.map(tile => (
        <TileOverview
          key={tile.id}
          id={tile.id}
          tileNumber={tile.tileNumber}
          createdAt={tile.createdAt}
          controlDate={tile.controlDate}
          completedAt={tile.completedAt}
          system={tile.system}
          tileType={tile.tileType}
          location={{
            name: tile.location.name,
            city: tile.location.city,
            street: tile.location.street
          }} 
          description={tile.description} 
          status={tile.status} 
          isTechnological={false} 
          files={tile.files}
        />
      ))}
    </div>
  )
};
