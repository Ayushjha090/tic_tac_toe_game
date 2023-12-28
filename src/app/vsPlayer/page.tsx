'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { PlayerDetails } from '@/types/PlayerType';
import StartGameDialog from '@/components/vsPlayer/StartGameDialog';

const PlayerGame = () => {
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

  return (
    <>
      <h1>Player Game</h1>
      <StartGameDialog
        startGame={startGame}
        setStartGame={setStartGame}
        playerOneDetails={playerOneDetails}
        setPlayerOneDetails={setPlayerOneDetails}
        playerTwoDetails={playerTwoDetails}
        setPlayerTwoDetails={setPlayerTwoDetails}
        playerOneSelectedMark={playerOneSelectedMark ? playerOneSelectedMark : 'x'}
      />
    </>
  );
};

export default PlayerGame;
