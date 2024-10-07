interface Photo {
  id: string;
  user: {
    name: string;
    location?: string;
  };
  urls: { [key: string]: string };
  height: number;
  width: number;
}
type PhotoResponseData = {
  photos: {
    id: string;
    name: string;
    location: string;
    urls: { [key: string]: string };
    height: number;
    width: number;
  }[];
  fetchedData: Date;
};

interface PhotoDetails {
  id: string;
  index: number;
  name: string;
  location?: string;
  urls: { [key: string]: string };
  height: number;
  width: number;
}

export type { Photo, PhotoDetails, PhotoResponseData }