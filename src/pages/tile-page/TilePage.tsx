import { TileOverview } from '../../components/tile-overview/TileOverview';
import { Statuses } from '../../lib/constants/statuses';
import { tiles } from '../../lib/get';
import style from './styles.module.css';

const filteredTileByStatus = (type: string) => {
  return tiles.filter(tile => tile.tileType.includes(type));
};

export const TilePage = () => {
  return (
    <section className={style.section}>
      {Object.entries(Statuses).map(([key, value]) => (
        <div key={key} className={style.column}>
        <h2 className={style.title}>{value}</h2>
          <div className={style.tiles}>
            {filteredTileByStatus(value).map((tile) => (
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
        </div>
      ))}
    </section> 
  );
};
