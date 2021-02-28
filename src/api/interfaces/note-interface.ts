export type Notes = Note[];

export interface Note {
  id: string;
  title: string;
  subTitle?: string;
  text: string;
  image?: string;
}