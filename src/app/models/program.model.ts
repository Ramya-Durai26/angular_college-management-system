export interface Program {
  id: number;
  name: string;
  description: string;
  duration: string;
  status: 'Active' | 'Inactive';
}