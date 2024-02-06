'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { toast } from 'react-hot-toast';

import { PlayerDetails } from '@/types/PlayerType';
import StartGameDialog from '@/components/vsPlayer/StartGameDialog';
import GameBoard from '@/components/UI/GameBoard';
import { GAME_BOARD, toastDurtation, toastDirection } from '@/utils/constants';
import { checkWin } from '@/utils/helper';

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
  const [gameState, setGameState] = useState<{
    turn: string;
    gameBoardState: string[][];
    gameStatus: string;
  }>({
    turn: 'x',
    gameBoardState: GAME_BOARD,
    gameStatus: 'ongoing',
  });

  const handlePlayerMove = (rowIndex: number, colIndex: number) => {
    if (gameState.gameBoardState[rowIndex][colIndex] !== '' || gameState.gameStatus !== 'ongoing') {
      toast.error('Invalid Move', { position: toastDirection, duration: toastDurtation });
      return;
    }

    const newGameBoard = [...gameState.gameBoardState];
    newGameBoard[rowIndex][colIndex] = gameState.turn.toUpperCase();
    const newTurn = gameState.turn.toLowerCase() === 'x' ? 'o' : 'x';

    if (checkWin(rowIndex, colIndex, gameState.turn.toUpperCase(), newGameBoard)) {
      setGameState((prevGameState) => ({
        ...prevGameState,
        gameBoardState: newGameBoard,
        gameStatus: 'won',
      }));

      return;
    }

    setGameState((prevGameState) => ({
      ...prevGameState,
      turn: newTurn,
      gameBoardState: newGameBoard,
    }));
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
