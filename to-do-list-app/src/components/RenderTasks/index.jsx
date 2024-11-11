import { Delete } from "../Delete";
import './index.scss';

export function RenderTasks({ data, removeTask }) {
  return (
    <ul>
      {data.map((item, index) => {
        return <li key={index}>{item} <Delete index={index} removeTask={removeTask}/> </li>;
      })}
    </ul>
  );
}
