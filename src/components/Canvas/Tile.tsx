import Color from 'core/Color';
import TileActions from './TileActions';
import styles from './style.module.css';

type TileProps = {
  color: Color;
  locked?: boolean;
  lockUnlock?: () => void;
  addColor?: () => void;
};

export default function Tile({
  color,
  locked,
  lockUnlock,
  addColor,
}: TileProps) {
  return (
    <div
      className={styles.tile}
      style={{ backgroundColor: `#${color.hexColor}` }}>
      <TileActions
        locked={locked}
        lockUnlock={lockUnlock}
        copyableText={`#${color.hexColor}`}
      />
      {addColor && (
        <div className={styles.addColorAction} onClick={addColor}>
          <i className="bi bi-plus-circle" />
        </div>
      )}
    </div>
  );
}
