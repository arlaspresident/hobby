export type HobbyItem = {
  id: number;        
  name: string;     
  minutes: number;     
  doneThisWeek: boolean; 
};

export const hobbies: HobbyItem[] = [
  { id: 1, name: "Glute workout", minutes: 75, doneThisWeek: true },
  { id: 2, name: "Upper body", minutes: 60, doneThisWeek: false },
  { id: 3, name: "Cardio", minutes: 35, doneThisWeek: true },
];
