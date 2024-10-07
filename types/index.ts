interface ResponseFromApi {
  id: string;
  user: {
    name: string;
    location?: string;
  };
  urls: { [key: string]: string };
  height: number;
  width: number;
  alt_description: string;
}
// type PhotoResponseData = {
//   photos: {
//     id: string;
//     name: string;
//     location: string;
//     urls: { [key: string]: string };
//     height: number;
//     width: number;
//   }[];
//   fetchedData: Date;
// };

interface PhotoDetails {
  id: string;
  index: number;
  name: string;
  location?: string;
  urls: { [key: string]: string };
  height: number;
  width: number;
  alt_description: string;
}

export type { 
  ResponseFromApi, 
  PhotoDetails, 
  // PhotoResponseData 
}