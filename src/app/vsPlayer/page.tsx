'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { toast } from 'react-hot-toast';

import { PlayerDetails } from '@/types/PlayerType';
import StartGameDialog from '@/components/vsPlayer/StartGameDialog';
import GameBoard from '@/components/UI/GameBoard';

const GAME_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const PlayerGame = () => {
  const searchParams = useSearchParams();
  const playerOneSelectedMark = searchParams.get('selectedMark');

  useEffect(() => {
    if (
      localStorage.getItem('playerOneDetails') === null ||
      localStorage.getItem('playerTwoDetails') === null
    ) {
      setStartGame(false);
    } else {
      setStartGame(true);
    }
  }, []);

  const [startGame, setStartGame] = useState<boolean>(true);
  const [playerOneDetails, setPlayerOneDetails] = useState<PlayerDetails>({
    playerMark: '',
    playerName: '',
    nameError: '',
  });
  const [playerTwoDetails, setPlayerTwoDetails] = useState<PlayerDetails>({
    playerMark: '',
    playerName: '',
    nameError: '',
  });
  const [gameState, setGameState] = useState<{ turn: string; gameBoardState: string[][] }>({
    turn: 'x',
    gameBoardState: GAME_BOARD,
  });

  const handlePlayerMove = (rowIndex: number, colIndex: number) => {
    if (gameState.gameBoardState[rowIndex][colIndex] !== '') {
      toast.error('Invalid Move', { position: 'top-center', duration: 1000 });
      return;
    }
    setGameState((prevGameState: { turn: string; gameBoardState: string[][] }) => {
      const newGameBoard = prevGameState.gameBoardState;
      newGameBoard[rowIndex][colIndex] = prevGameState.turn;
      const newTurn = prevGameState.turn.toLowerCase() === 'x' ? 'O' : 'X';

      return { turn: newTurn, gameBoardState: newGameBoard };
    });
  };

  return (
    <>
      <StartGameDialog
        startGame={startGame}
        setStartGame={setStartGame}
        playerOneDetails={playerOneDetails}
        setPlayerOneDetails={setPlayerOneDetails}
        playerTwoDetails={playerTwoDetails}
        setPlayerTwoDetails={setPlayerTwoDetails}
        playerOneSelectedMark={playerOneSelectedMark ? playerOneSelectedMark : 'x'}
      />
      <GameBoard
        currentTurn={gameState.turn}
        gameBoard={gameState.gameBoardState}
        onPlayerMove={handlePlayerMove}
      />
    </>
  );
};

export default PlayerGame;
