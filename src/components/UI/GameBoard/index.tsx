'use client';
import React from 'react';

import RefreshIcon from '@mui/icons-material/Refresh';

import ScoreTiles from './ScoreTiles';

const GameBoard = ({
  currentTurn,
  gameBoard,
  onPlayerMove,
}: {
  currentTurn: string;
  gameBoard: string[][];
  onPlayerMove: (rowIndex: number, colIndex: number) => void;
}) => {
  return (
    <>
      <header className='w-screen md:w-8/12 lg:w-5/12 2xl:w-4/12 p-2 mx-auto flex flex-row justify-around items-center'>
        <h1 id='header-logo' className='text-4xl font-black'>
          <span className='mr-1 text-primary-color-main'>X</span>
          <span className='text-secondary-color-main'>O</span>
        </h1>
        <div
          id='turn-notifier-container'
          className='bg-primary-color-light p-2 px-5 -ml-6 rounded-md flex items-center shadow-md shadow-background-color'
        >
          <h1 className='text-2xl font-black mr-2'>{currentTurn.toUpperCase()}</h1>
          <p className='text-base font-black align-baseline'>TURN</p>
        </div>
        <div
          id='game-restart'
          className='p-2 bg-slate-400 rounded-md shadow-md shadow-background-color cursor-pointer'
        >
          <RefreshIcon className='text-background-color' />
        </div>
      </header>
      <main className='w-screen md:w-8/12 lg:w-5/12 2xl:w-4/12 p-2 mx-auto flex flex-row flex-wrap justify-around items-center'>
        {gameBoard.map((row: string[], rowIndex: number) => {
          return row.map((col: string, colIndex: number) => {
            return (
              <div
                key={`${rowIndex}${colIndex}`}
                className={`bg-primary-color-light w-3/12 lg:w-1/4 2xl:w-3/12 h-28 p-5 m-1 lg:m-2 rounded-md text-center text-6xl font-black flex justify-center items-center shadow-md shadow-background-color cursor-pointer ${
                  col.toLowerCase() === 'x'
                    ? 'text-primary-color-main'
                    : 'text-secondary-color-main'
                }`}
                onClick={(event) => onPlayerMove(rowIndex, colIndex)}
              >
                {col.toUpperCase()}
              </div>
            );
          });
        })}
      </main>
      <footer className='w-screen md:w-8/12 lg:w-5/12 2xl:w-4/12 p-2 mx-auto flex flex-row flex-wrap justify-around items-center'>
        <ScoreTiles title='X (P1)' score='0' tileFor='playerOne' />
        <ScoreTiles title='Ties' score='0' tileFor='ties' />
        <ScoreTiles title='O (P2)' score='0' tileFor='playerTwo' />
      </footer>
    </>
  );
};

export default GameBoard;
