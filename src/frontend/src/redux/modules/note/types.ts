export type NotesResponse = NoteResponse[];

export interface NoteResponse {
  id: string;
  title: string;
  subTitle?: string;
  text: string;
  image?: string;
}

export interface Note {
  title: string;
  subTitle?: string;
  text: string;
  image?: string;
}

export interface NoteState {
  notes?: NotesResponse,
  note?: NoteResponse,
}
