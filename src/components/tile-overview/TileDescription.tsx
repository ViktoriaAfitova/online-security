import { useState } from 'react';
import style from './styles.module.css';

type Props = {
  description: string;
}

export const TileDescription = ({
  description
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prevState) => !prevState);
  
  return (
    <div className={style.description}>
    <p className={isExpanded ? style.fullDescription : style.truncatedDescription}>
      {description}
    </p>
    <div className={style.overlay}>
      <button className={style.readMoreButton} onClick={toggleExpand}>
        {isExpanded ? '▲ Свернуть' : '▼ Читать далее'}
      </button>   
    </div>
  </div>
  )
};
