export interface GetSong {
  _id: string;
  artist: string;
  duration: number;
  url: string;
  title: string;
  photo: string;
}

export interface QueryData {
  getSongs: GetSong[];
}
