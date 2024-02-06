interface ScoreTilesProps {
  title: string;
  score: string;
  tileFor: string;
}

const ScoreTiles = ({ title, score, tileFor }: ScoreTilesProps) => {
  const backgroundColor =
    tileFor.toLowerCase() === 'playerone'
      ? 'bg-primary-color-main'
      : tileFor.toLowerCase() === 'playertwo'
        ? 'bg-secondary-color-main'
        : 'bg-slate-400';
  return (
    <div
      className={`w-3/12 lg:w-1/4 2xl:w-3/12 h-28 m-1 lg:m-2 rounded-md font-black flex flex-col justify-center items-center shadow-md shadow-background-color text-background-color ${backgroundColor}`}
    >
      <p className='text-xl mb-2'>{title}</p>
      <p className='text-3xl'>{score}</p>
    </div>
  );
};

export default ScoreTiles;
