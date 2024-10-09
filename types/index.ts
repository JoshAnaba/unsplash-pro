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
  PhotoDetails
}