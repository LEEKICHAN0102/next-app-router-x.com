import style from './message.module.css';
import Room from './[room]/_component/Room';

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
    </main>
  )
}