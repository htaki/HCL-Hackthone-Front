
export interface ReadProfileUpdateDto {
  username?: string;
  location?: string;
  workplace?: string;
  isApartment: boolean;
  familySize: number;
}

export interface UserProfileUpdateDto {
  location: string;
  workplace?: string;
  isApartment: boolean;
  familySize: number;
}
