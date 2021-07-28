export interface Poll{
  id: number; //12
  question: string; // which days of week you like most?
  results: number[]; //[0,0,0,0,5,7,2]
  options: string[]; //["Monday", "Tuesday", "Wednesday", ...]
  thumbnail: string; //image.png
}

export interface Voter {
  id: string; // 0xdasdimfwuw
  voted: number[]; // [12]
}
