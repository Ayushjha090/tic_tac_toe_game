"use client";
import React, {useState, useEffect} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Dialog from "@/components/UI/Dialog";
import {DialogDescription, DialogTitle, DialogHeader} from "@/components/UI/Dialog/DialogHeader";
import DialogContent from "@/components/UI/Dialog/DialogContent";

interface PlayerDetails {
  playerName: string,
  playerMark: string,
  nameError: string,
};

const PlayerGame = () => {

  const [startGame, setStartGame] = useState<boolean>(true);
  const [playerOneDetails, setPlayerOneDetails] = useState<PlayerDetails>({playerMark: '', playerName: '', nameError: ''});
  const [playerTwoDetails, setPlayerTwoDetails] = useState<PlayerDetails>({playerMark: '', playerName: '', nameError: ''});

  const router = useRouter();
  const searchParams = useSearchParams();
  const playerOneSelectedMark = searchParams.get('selectedMark');

  useEffect(() => {
    if(localStorage.getItem('playerOneDetails') === null || localStorage.getItem('playerTwoDetails') === null) {
      setStartGame(false);
    } else {
      setStartGame(true);
    }
  }, [])

  useEffect(() => {
    if(playerOneSelectedMark && playerOneSelectedMark.toLowerCase() === 'x') {
        setPlayerOneDetails((prevPlayerOneDetails:PlayerDetails) => ({...prevPlayerOneDetails, playerMark: playerOneSelectedMark}));
        setPlayerTwoDetails((prevPlayerTwoDetails:PlayerDetails) => ({...prevPlayerTwoDetails, playerMark: 'o'}));
      } else if (playerOneSelectedMark && playerOneSelectedMark.toLowerCase() === 'o') {
        setPlayerOneDetails((prevPlayerOneDetails:PlayerDetails) => ({...prevPlayerOneDetails, playerMark: playerOneSelectedMark}));
        setPlayerTwoDetails((prevPlayerTwoDetails:PlayerDetails) => ({...prevPlayerTwoDetails, playerMark: 'x'}));
      } else {
        setPlayerOneDetails((prevPlayerOneDetails:PlayerDetails) => ({...prevPlayerOneDetails, playerMark: 'x'}));
        setPlayerTwoDetails((prevPlayerTwoDetails:PlayerDetails) => ({...prevPlayerTwoDetails, playerMark: 'o'}));
      }
  }, [playerOneSelectedMark])

  const handleClose = () => {
    router.push('/');
  }

  const handlePlayGame = () => {
    if(!playerOneDetails.playerName && !playerTwoDetails.playerName) {
      setPlayerOneDetails((prevPlayerDetails: PlayerDetails) => ({...prevPlayerDetails, nameError: 'Player 1 name cannot be empty!'}));
      setPlayerTwoDetails((prevPlayerDetails: PlayerDetails) => ({...prevPlayerDetails, nameError: 'Player 2 name cannot be empty!'}));
      return;
    } else if (!playerOneDetails.playerName) {
      setPlayerOneDetails((prevPlayerDetails: PlayerDetails) => ({...prevPlayerDetails, nameError: 'Player 1 name cannot be empty!'}));
      return;
    } else if (!playerTwoDetails.playerName) {
      setPlayerTwoDetails((prevPlayerDetails: PlayerDetails) => ({...prevPlayerDetails, nameError: 'Player 2 name cannot be empty!'}));
      return;
    } else {
      const playerOneDetailsString = JSON.stringify(playerOneDetails);
      const playerTwoDetailsString = JSON.stringify(playerTwoDetails);
      localStorage.setItem('playerOneDetails', playerOneDetailsString);
      localStorage.setItem('playerTwoDetails', playerTwoDetailsString);
      setStartGame(true);
      return;
    }
  }

  const handlePlayerNameChange = (event:React.ChangeEvent<HTMLInputElement>, setPlayerDetails:React.Dispatch<React.SetStateAction<PlayerDetails>>, playerNumber:string) => {
    setPlayerDetails((prevPlayerDetails:PlayerDetails) => {
      if(event.target.value.trim().length === 0) {
       const newPlayerDetails:PlayerDetails = {...prevPlayerDetails, nameError: `Player ${playerNumber} cannot be empty`}
       return newPlayerDetails;
      } else {
        const newPlayerDetails:PlayerDetails = {...prevPlayerDetails, playerName: event.target.value, nameError: ''}
        return newPlayerDetails;
      }
    })
  }

  return(
    <>
      <h1>Player Game</h1>
      <Dialog open={!startGame}>
        <DialogHeader>
          <DialogTitle title="Start a Game of Tic Tac Toe" onClose={handleClose}/>
          <DialogDescription description="Enter the names of the two players to start the game." />
        </DialogHeader>
        <DialogContent>
          <div className="flex flex-col">
            <div className="mt-3 flex flex-col">
              <p className="text-lg font-bold text-primary-color-main">Player 1 <span className="text-secondary-color-main">({playerOneDetails.playerMark.toUpperCase()})</span></p>
              <input className={`mt-2 p-2 rounded-md bg-background-color ${playerOneDetails.nameError ? 'border-2 border-red-400' : ''} focus:outline-none`} type="text" name="player-one-name" id="player-one-name" placeholder="Player 1 name" onChange={(event)=>handlePlayerNameChange(event, setPlayerOneDetails, '1')} />
              {playerOneDetails.nameError ? <p className="text-sm font-bold py-2 text-red-400">{playerOneDetails.nameError}</p>:null}
            </div>
            <div className="mt-3 flex flex-col">
              <p className="text-lg font-bold text-primary-color-main">Player 2 <span className="text-secondary-color-main">({playerTwoDetails.playerMark.toUpperCase()})</span></p>
              <input className={`mt-2 p-2 rounded-md bg-background-color ${playerTwoDetails.nameError ? 'border-2 border-red-400' : ''} focus:outline-none`} type="text" name="player-two-name" id="player-two-name" placeholder="Player 2 name" onChange={(event)=>handlePlayerNameChange(event, setPlayerTwoDetails, '2')}/>
              {playerTwoDetails.nameError ? <p className="text-sm font-bold py-2 text-red-400">{playerTwoDetails.nameError}</p>:null}
            </div>
            <div className="w-full my-5 rounded-md text-center p-2 bg-secondary-color-dark startGameBtn cursor-pointer">
              <button className="text-2xl text-black font-extrabold" onClick={handlePlayGame}>Start Game</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
};

export default PlayerGame;
