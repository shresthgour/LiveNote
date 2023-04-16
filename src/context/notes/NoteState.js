import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "643c0a585fdef58824297fe7",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title",
      "description": "A Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:46:48.960Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    },
    {
      "_id": "643c0a855fdef58824297fed",
      "user": "6437e874ccc29fe3d4d9f9d5",
      "title": "Title 2",
      "description": "C Site Viper Lineups",
      "tag": "valorant",
      "date": "2023-04-16T14:47:33.214Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial)

  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;