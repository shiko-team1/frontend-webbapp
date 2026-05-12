export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string | null;
  instructorId: number;
}
