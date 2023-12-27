"use client";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import Dialog from "@/components/UI/Dialog";
import {DialogDescription, DialogTitle, DialogHeader} from "@/components/UI/Dialog/DialogHeader";
import DialogContent from "@/components/UI/Dialog/DialogContent";

const PlayerGame = () => {

  const [startGame, setStartGame] = useState<boolean>(false);
  const [playerOneName, setPlayerOneName] = useState<string>('');
  const [playerTwoName, setPlayerTwoName] = useState<string>('');

  const router = useRouter();

  const handleClose = () => {
    router.push('/');
  }

  const handlePlayGame = () => {
    setStartGame(true);
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
              <p className="text-lg font-bold text-primary-color-main">Player 1</p>
              <input className="mt-2 p-2 rounded-md bg-background-color focus:outline-none" type="text" name="player-one-name" id="player-one-name" placeholder="Player 1 name" onChange={(event)=>setPlayerOneName(event.target.value)} />
            </div>
            <div className="mt-3 flex flex-col">
              <p className="text-lg font-bold text-primary-color-main">Player 2</p>
              <input className="mt-2 p-2 rounded-md bg-background-color focus:outline-none" type="text" name="player-two-name" id="player-two-name" placeholder="Player 2 name" onChange={(event)=>setPlayerTwoName(event.target.value)}/>
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
