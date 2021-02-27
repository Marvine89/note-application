export type Notes = Note[];

export interface Note {
  id: number;
  title: string;
  subTitle?: string;
  text: string;
  image?: string;
}

export interface NoteState {
  notes?: Notes,
  note?: Note,
}
