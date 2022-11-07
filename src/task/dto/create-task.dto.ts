export class CreateTaskDto {
  name: string;
  description: string;
  due_date: Date;
  status: string;
  assignee: number;
}
