import {Link} from 'react-router-dom';
import {MediaItemWithOwner} from '../types/DBTypes';

const MediaRow = (props: {
  item: MediaItemWithOwner
}) => {
  const {item}  = props;

  return (
    <tr className="media-row">
      <td>
        <h2>{item.username}</h2>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <h3>{item.title}</h3>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>
        <Link to="/single" state={item}>View</Link>
      </td>
    </tr>
  );
};

export default MediaRow;
