import { useState } from 'react';
import style from './styles.module.css';

type Props = {
  description: string;
}

export const TileDescription = ({
  description,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prevState) => !prevState);

  return (
    <div className={`${style.description} ${isExpanded ? style.expanded : ''}`}>
      <p className={isExpanded ? style.fullDescription : style.truncatedDescription}>
        {description}
      </p>
      {!isExpanded && (
        <div className={style.overlay}>
          <button className={style.readMoreButton} onClick={toggleExpand}>
            ▼ Читать далее
          </button>
        </div>
      )}
      {isExpanded && (
        <button className={style.readMoreButtonExpanded} onClick={toggleExpand}>
          ▲ Свернуть
        </button>
      )}
    </div>
  );
};